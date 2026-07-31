"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/libs/data";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lo que dicen de nosotros{" "}
            <span className="text-[#2563eb]">Clientes</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Empresas de todos los tamaños confían en Nexora para escalar sus
            operaciones.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeIn key={t.name} delay={index * 0.15}>
              <div className="relative rounded-2xl border border-slate-300 bg-slate-200/50 p-8 transition-all hover:shadow-lg">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[#3b82f6]" />

                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>

                <p className="mt-4 text-slate-700 leading-relaxed">{t.quote}</p>

                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">
                      {t.role} {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
