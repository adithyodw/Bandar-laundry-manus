"use client";

import { useEffect, useState } from "react";
import { isIosLikeWebKit } from "@/lib/ios-webkit";

/** Hydration-safe: false on server/first paint, then updated on client. */
export function useIosLikeDevice(): boolean {
  const [ios, setIos] = useState(false);
  useEffect(() => {
    setIos(isIosLikeWebKit());
  }, []);
  return ios;
}
