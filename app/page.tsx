import { Toaster } from "@/components/ui/sonner";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

import { Hero } from "@/sections/Hero";
import { Navigation } from "@/sections/Navigation";
import { Program } from "@/sections/Program";
import { Event} from "@/sections/Event";


import Image from "next/image";
import { Footer } from "@/sections/Footer";
import { Vote } from "@/sections/Vote";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Vote/>
        <Event/>
        <Program />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
