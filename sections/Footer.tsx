"use client";
import { Vote } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Logo gauche */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/carte2.png"
              alt="Logo gauche"
              className="h-30 md:h-34 w-auto object-contain"
            />
          </div>

          {/* Bloc central */}
          <div className="flex flex-col items-center text-center max-w-xl">
            
            {/* Texte */}
            <p className="text-3xl md:text-4xl text-black leading-relaxed font-bold">
             Engagement • Social • Solidaire • Écologique • Et pour la paix
            </p>
          </div>

          {/* Logo droit */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/carte1.png"
              alt="Logo droit"
              className="h-40 md:h-44 w-auto object-contain"
            />
          </div>
        </div>

        {/* Bas de footer (optionnel pro) */}
        <div className="mt-12 text-center text-xs text-black font-bold">
          © {new Date().getFullYear()} Cathy HADJER — Tous droits réservés
        </div>

      </div>
    </footer>
  );
}