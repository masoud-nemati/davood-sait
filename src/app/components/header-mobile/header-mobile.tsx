"use client"

import { navItems } from "@/data/navItem.data"
import Link from "next/link"
import Image from "next/image"

type Props = {
  onClose: () => void
}

export const HeaderMobile = ({ onClose }: Props) => {
  return (
    <div className="h-full flex flex-col bg-[#0b0f19] text-white">

      {/* TOP BAR */}
      <div className="flex items-center justify-between p-5 border-b border-white/10">

        {/* LOGO */}
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Image
            src="/logos/masoudnemati.png"
            alt="logo"
            width={100}
            height={40}
          />
        </Link>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            w-9 h-9
            flex items-center justify-center
            rounded-full
            bg-white/10
            hover:bg-white/20
            transition
            text-white
          "
        >
          ✕
        </button>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2 p-5">

        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="
              text-lg text-gray-300
              py-3 px-3
              rounded-lg
              hover:bg-white/10 hover:text-white
              transition
            "
          >
            {item.label}
          </Link>
        ))}

      </nav>

    </div>
  )
}