import { NextResponse } from "next/server";

const USERNAME = "bandarlaundryexpress";
const MAX_POSTS = 6;

type InstagramPost = {
  id: string;
  shortcode: string;
  permalink: string;
  thumbnailUrl: string;
  caption: string;
};

function extractPostsFromHtml(html: string): InstagramPost[] {
  const postRegex =
    /"shortcode":"([^"]+)".*?"display_url":"([^"]+)".*?"edge_media_to_caption":\{"edges":\[(.*?)\]\}/g;
  const posts: InstagramPost[] = [];
  const seen = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = postRegex.exec(html)) !== null && posts.length < MAX_POSTS) {
    const shortcode = match[1];
    const thumbnailUrl = match[2]
      .replace(/\\u0026/g, "&")
      .replace(/\\\//g, "/");
    const captionBlock = match[3];
    const captionMatch = captionBlock.match(/"text":"([^"]*)"/);
    const caption = (captionMatch?.[1] ?? "")
      .replace(/\\n/g, " ")
      .replace(/\\"/g, '"');

    if (!shortcode || seen.has(shortcode)) continue;
    seen.add(shortcode);

    posts.push({
      id: shortcode,
      shortcode,
      permalink: `https://www.instagram.com/p/${shortcode}/`,
      thumbnailUrl,
      caption,
    });
  }

  return posts;
}

export async function GET() {
  try {
    const response = await fetch(`https://www.instagram.com/${USERNAME}/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to load Instagram profile" },
        { status: 502 }
      );
    }

    const html = await response.text();
    const posts = extractPostsFromHtml(html);

    return NextResponse.json(
      { username: USERNAME, posts, fetchedAt: new Date().toISOString() },
      {
        headers: {
          "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Instagram fetch failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
