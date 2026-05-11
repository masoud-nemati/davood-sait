"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-4">

      {/* Background Blur */}
      <Image
        src="/myimg1.jpeg"
        alt="background"
        fill
        priority
        className="object-cover blur-3xl scale-110 opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Main Image */}
      <Image
        src="/myimg1.jpeg"
        alt="main"
        fill
        priority
        className="object-contain brightness-50 z-20"
      />

      {/* 🔥 فقط اینجا عرض کنترل شد */}
      <motion.div
        className="relative z-30 w-full max-w-md text-center text-white space-y-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-400">
          Masoud Nemati
        </h1>

        <p className="text-lg md:text-2xl text-yellow-300">
          Welcome to my personal website
        </p>

        <button
          onClick={() => router.push("/home")}
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-3 rounded-xl"
        >
          Visit →
        </button>
      </motion.div>

    </div>
  );
}