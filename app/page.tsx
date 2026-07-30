import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
