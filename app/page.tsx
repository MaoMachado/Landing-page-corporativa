import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
