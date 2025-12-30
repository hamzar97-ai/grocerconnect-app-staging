"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🔥 VERY IMPORTANT
    const onReady = () => {
      lenis.resize();
    };

    document.addEventListener("page:ready", onReady);

    return () => {
      document.removeEventListener("page:ready", onReady);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
