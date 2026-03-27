"use client";

import { useEffect, useMemo, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/data";

type InstagramPost = {
  id: string;
  permalink: string;
  thumbnailUrl: string;
  caption: string;
};

export default function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed");
        const data = (await response.json()) as { posts?: InstagramPost[] };
        if (mounted) setPosts(Array.isArray(data.posts) ? data.posts : []);
      } catch {
        if (mounted) setPosts([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    loadPosts();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);

  const visiblePosts = useMemo(() => posts.slice(0, 6), [posts]);

  return (
    <section id="instagram" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="section-label">Follow Us</span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Latest from Instagram
              <br />
              <span className="italic">@bandarlaundryexpress</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors tracking-wide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            View all posts
          </a>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-slate-100 animate-pulse rounded-sm"
              />
            ))}
          </div>
        ) : visiblePosts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {visiblePosts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item group block rounded-sm overflow-hidden border border-slate-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnailUrl}
                  alt={post.caption || "Bandar Laundry Express Instagram post"}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-slate-200 p-10 text-center">
            <p className="text-slate-500 mb-4">Follow us on Instagram for daily updates from our laundry service across Bali.</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @bandarlaundryexpress
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
