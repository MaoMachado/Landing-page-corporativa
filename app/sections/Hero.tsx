import { ArrowRight, Play } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f172a] px-4 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#1e3a8a]/40 via-[#0f172a] to-[#0f172a]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <FadeIn delay={0}>
          <span className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-[#dbeafe] backdrop-blur-md">
            🚀 Nexora 2.0 ya está disponible
          </span>
        </FadeIn>

        <FadeIn delay={0.1} direction="up">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Transforma datos en {""}
            <span className="bg-linear-to-r from-[#3b82f6] to-[#f59e0b] bg-clip-text text-transparent">
              decisiones
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            La plataforma que unifica tus operaciones, automatiza reportes y
            entrega insights en tiempo real. Sin código, sin fricción.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Comenzar Gratis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Ver Demo <Play className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <p className="mt-6 text-sm text-slate-400">
            Sin tarjeta de crédito · Setup en 2 minutos · Cancela cuando quieras
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
