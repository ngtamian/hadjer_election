import { Toaster } from "@/components/ui/sonner";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Navigation } from "@/sections/Navigation";
import { Program } from "@/sections/Program";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Program />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
