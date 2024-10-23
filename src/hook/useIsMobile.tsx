"use client";
import { useEffect,useState } from "react";

export const useIsMobile = () => {
  // 768 breakpoint for md screen
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isMobile;
};