"use client";

import { footerLinks } from "@/libs/data";

const socialLinks = [
  { icon: "Github", href: "https://github.com", label: "GitHub" },
  { icon: "X", href: "https://twitter.com", label: "X" },
  { icon: "LinkedIn", href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white">
              Nexora
            </a>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Transforma datos en decisiones. La plataforma de análisis
              operativo que tu equipo necesita.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  target="_black"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Productos
            </h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#3b82f6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Compañía
            </h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.compania.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#3b82f6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#3b82f6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Nexora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
