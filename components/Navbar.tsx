"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/libs/utils";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  const navLinks = [
    { label: "Producto", href: "#producto" },
    { label: "Características", href: "#features" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Precios", href: "#precios" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-bold text-[#1e3a8a]">
          Nexora
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2563eb]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm">Comenzar Gratis</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-white px-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium text-slate-600"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
