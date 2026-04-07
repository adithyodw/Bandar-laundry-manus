/**
 * True on iPhone / iPod / iPad Safari, and iPadOS desktop UA with touch.
 * Only safe to call in the browser (e.g. inside useEffect).
 */
export function isIosLikeWebKit(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/iP(ad|hone|od)/i.test(ua)) return true;
  if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) return true;
  return false;
}
