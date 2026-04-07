"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((m) => m.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((m) => m.SpeedInsights),
  { ssr: false }
);

/**
 * Load analytics after a short delay so the main thread and compositor
 * can settle first (helps fragile mobile WebKit tabs).
 */
export default function DeferredVercelMetrics() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(true), 6000);
    return () => window.clearTimeout(id);
  }, []);

  if (!show) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
