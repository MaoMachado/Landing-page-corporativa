"use client";

import { cn } from "@/libs/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  icon?: LucideIcon;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-[#2563eb] text-white hover:bg-[#1e3a8a] shadow-lg shadow-[#3b82f6]/25":
            variant === "primary",
          "bg-[#f59e0b] text-dark hover:bg-[#f59e0b]/90":
            variant === "secondary",
          "border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm":
            variant === "outline",
          "h-10 px-5 text-sm": size === "default",
          "h-12 px-8 text-base": size === "lg",
          "h-8 px-4 text-xs": size === "sm",
        },
        className,
      )}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
}
