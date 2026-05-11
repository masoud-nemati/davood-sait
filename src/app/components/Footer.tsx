import Link from "next/link";
import { navItems } from "@/data/navItem.data";

import {
  IconFacebookGray,
  IconInstagramGray,
  IconLinkedinGray,
  IconWhatsapp,
  IconTelegram,
  IconGithub,
  IconEmail,
} from "@/app/components/ui/icons/icons";

const socialLinks = [
  { href: "https://facebook.com", icon: IconFacebookGray, label: "Facebook" },
  { href: "https://instagram.com/masuodnemati1981", icon: IconInstagramGray, label: "Instagram" },
  { href: "https://linkedin.com/in/masoud-nemati", icon: IconLinkedinGray, label: "LinkedIn" },
  { href: "https://t.me/Mas_nema", icon: IconTelegram, label: "Telegram" },
  { href: "https://github.com/masoud-nemati", icon: IconGithub, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>

            <ul className="space-y-4 text-gray-300 text-sm">

              <li>📍 Turkey</li>

              {/* Contact items */}
              <li>
                <a
                  href="https://wa.me/905313845662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex items-center gap-3
      p-2 rounded-lg
      hover:bg-green-500/10
      transition
    "
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500/20">
                    <IconWhatsapp width="18" height="18" />
                  </span>

                  <span className="text-sm text-gray-300 hover:text-green-400">
                    WhatsApp
                  </span>
                </a>
              </li>

              <li>
                <div className="
    flex items-center gap-3
    p-2 rounded-lg
  ">
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500/20">
                    <IconEmail width="18" height="18" />
                  </span>

                  <span className="text-sm text-gray-300 break-all">
                    masuodn8@gmail.com
                  </span>
                </div>
              </li>

              <li className="text-sm text-gray-400 px-2">
                🕒 8:00 - 17:00
              </li>

              {/* SOCIAL */}
              <li className="flex flex-wrap gap-3 pt-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-gray-700/60
        hover:bg-blue-600
        hover:scale-110
        hover:shadow-lg
        transition-all duration-300
      "
                  >
                    <Icon width="18" height="18" />
                  </a>
                ))}
              </li>

            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xl font-bold mb-6">Pages</h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-6">About</h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Masoud Nemati</li>
              <li>Software & Theology Student</li>
              <li>Based in Türkiye</li>
              <li>Faith • Learning • Purpose</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Stay in Touch</h4>

            <p className="text-gray-400 text-sm mb-4">
              Leave your email and I’ll contact you.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
              >
                Send
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Masoud Nemati. All rights reserved.
        </div>

      </div>
    </footer>
  );
}