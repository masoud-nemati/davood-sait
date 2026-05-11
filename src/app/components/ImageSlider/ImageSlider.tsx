"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageSliderProps } from "./imageslaider.type";

export default function ImageSlider({ images }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full flex justify-center">
      {/* SLIDER CONTAINER */}
      <div
        className="
          relative w-full
          max-w-[95%]

          sm:max-w-[90%]
          md:max-w-[88%]
          lg:max-w-[85%]
          xl:max-w-[80%]
          2xl:max-w-[1336px]

          h-[220px]
          sm:h-[280px]
          md:h-[340px]
          lg:h-[380px]
          xl:h-[420px]
          2xl:h-[460px]

          overflow-hidden
          rounded-2xl
          shadow-xl
        "
      >
        <Image
          src={images[index]}
          alt="slider image"
          fill
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 90vw,
                 1336px"
          className="object-cover"
          priority
        />

        {/* LEFT */}
        <button
          onClick={prev}
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-gradient-to-br from-cyan-400/80 to-blue-600/80
            text-white
            shadow-lg
            hover:scale-110 active:scale-95
            transition
          "
        >
          ←
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-gradient-to-br from-purple-500/80 to-pink-600/80
            text-white
            shadow-lg
            hover:scale-110 active:scale-95
            transition
          "
        >
          →
        </button>
      </div>
    </div>
  );
}
