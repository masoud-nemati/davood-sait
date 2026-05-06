"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageData } from "./img.type";

type ImageComponentProps = Omit<ImageData, "id"> & {
  maxWidth?: number;
  ratio?: string; // مثل "16 / 9"
};

export default function ImageComponent({
  src = "/images/imagslider/Picsart.jpg",
  alt = "decorative image",
  maxWidth = 700,
  ratio = "7 / 6",
}: ImageComponentProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: `${maxWidth}px`,
        aspectRatio: ratio,
        margin: "20px auto",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: hover
          ? "0 30px 60px rgba(0,0,0,0.8)"
          : "0 20px 40px rgba(0,0,0,0.6)",
        transform: hover ? "translateY(-6px) scale(1.02)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 700px"
        style={{
          objectFit: "cover",
          transform: hover ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.45s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 60%)",
          opacity: hover ? 1 : 0,
          transition: "opacity 0.45s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
