import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "outline"
  compsize?: "sm" | "md" | "lg"
}

export const Input: React.FC<InputProps> = ({
  variant = "primary",
  compsize = "md",
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-md
        outline-none
        transition
        px-3

        ${compsize === "sm" && "py-1 text-sm"}
        ${compsize === "md" && "py-2 text-sm"}
        ${compsize === "lg" && "py-3 text-base"}

        ${variant === "primary" && "bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-blue-500"}
        ${variant === "outline" && "border border-gray-400 text-white"}

        ${className}
      `}
    />
  )
}