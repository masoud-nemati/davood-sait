"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // نمایش دکمه وقتی اسکرول زیاد شد
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // رفتن به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6
        w-12 h-12
        rounded-full
        bg-gray-400 text-black
        flex items-center justify-center
        shadow-lg
        hover:scale-110 active:scale-95
        transition
        z-50
      "
    >
      ↑
    </button>
  );
}