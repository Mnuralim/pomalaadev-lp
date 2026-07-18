"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const onScroll = () => {
      const currentScroll = window.pageYOffset;
      setHidden(currentScroll > lastScroll && currentScroll > 100);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}
