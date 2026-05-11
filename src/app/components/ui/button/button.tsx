import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        variant === "primary"
          ? "bg-yellow-400 text-black hover:bg-yellow-300"
          : "bg-gray-700 text-white hover:bg-gray-600"
      }`}
    >
      {children}
    </button>
  );
}