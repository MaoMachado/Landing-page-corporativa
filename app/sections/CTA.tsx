import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#1e3a8a] py-24 px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#2563eb]/30 via-[#1e3a8a] to-[#1e3a8a]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Listo para transformar tus datos?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#eff6ff]">
            Únete a más de 500 empresas que ya usan Nexora para tomar decisiones
            más inteligentes. Empieza gratis, sin compromiso.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="flex-1 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 backdrop-blur-sm outline-none focus:ring-2 focus:ring-[#f59e0b]"
            />

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Empezar gratis <ArrowRight />
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
