import Link from "next/link"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export const NavLink = ({ href, children, className }: Props) => {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition ${className}`}
    >
      {children}
    </Link>
  )
}