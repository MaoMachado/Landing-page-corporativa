"use client";

import {
  BarChart3,
  Globe,
  Plug,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/libs/data";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Zap,
  Shield,
  Users,
  Globe,
  Plug,
};

export function Features() {
  return (
    <section id="features" className="bg-slate-800 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Todo lo que necesitas para{" "}
            <span className="text-[#2563eb]">escalar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Deja de saltar entre herramientas. Nexora centraliza tus operaciones
            en una sola plataforma poderosa.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:right-1 hover:ring-[#3b82f6]/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
