import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
