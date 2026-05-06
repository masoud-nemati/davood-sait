'use client'

import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect } from "react"

import { Input } from "@/app/components/ui/input/input"
import { NavLink } from "./nav-link"
import { navItems } from "@/data/navItem.data"
import { IconBar } from "@/app/components/ui/icons/icons"
import { HeaderMobile } from "./header-mobile/header-mobile"

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredItems = navItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          sticky top-0 z-50 border-b border-white/10
          transition-all duration-300

          ${scrolled
            ? "h-14 bg-gray-900/40 backdrop-blur-xl shadow-lg shadow-black/40"
            : "bg-gray-700/40 backdrop-blur-xl h-20"
          }
        `}
      >

        <div
          className={`
            w-full pl-2 pr-6 flex items-center justify-between
            transition-all duration-300

            ${scrolled ? "h-14" : "h-20"}
          `}
        >

          {/* LEFT */}
          <div className="flex items-center gap-5">

            {/* LOGO */}
            <Link
              href="/home"
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/logos/masoudnemati.png"
                alt="logo"
                width={120}
                height={55} // فقط یک نسبت ثابت
                className={`
    w-auto transition-all duration-300 hover:rotate-[-2deg]
    ${scrolled ? "h-[45px]" : "h-[55px]"}
  `}
                priority
              />
            </Link>

            {/* SEARCH (desktop) */}
            <div className="hidden lg:block w-[260px]">
              <Input
                variant="primary"
                compsize="md"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                className="bg-white/10 text-white border-white/20"
              />
            </div>

          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {filteredItems.map(item => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="
              lg:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition
            "
            aria-label="menu"
          >
            <IconBar strokeWidth={2} />
          </button>

        </div>
      </header>

      {/* BACKDROP */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 bg-black/60 z-40 transition-opacity
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[300px]
          bg-black/95 backdrop-blur-xl
          border-l border-white/10
          z-50
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <HeaderMobile onClose={closeMenu} />
      </aside>
    </>
  )
}