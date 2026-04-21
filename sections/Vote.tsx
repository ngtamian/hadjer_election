"use client";

import { CheckCircle, FileText, Monitor, ArrowRight } from "lucide-react";

export function Vote() {
  return (
    <section id="vote" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium mb-4">
            Élections Consulaires 2026 - Tchad
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comment voter aux{" "}
            <span className="text-gray-600">
              élections consulaires
            </span>{" "}
            ?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout savoir sur ces élections dédiées à la communauté française.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Colonne 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 uppercase text-center mb-8">
              Dates importantes
            </h3>

            <div className="space-y-6">
              <div className="border-b pb-6">
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">
                    Vendredi 24 avril 2026 :
                  </span>{" "}
                  inscription sur la liste électorale consulaire (Insrire sur le registre de Français établis au Tchad)
                </p>
              </div>

              <div className="border-b pb-6">
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">
                    22 → 27 mai :
                  </span>{" "}
                  vote en ligne ouvert.
                </p>
              </div>

              <div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">
                    30 mai 2026 :
                  </span>{" "}
                  vote à l’urne ou procuration.
                </p>
              </div>
            </div>
            <a  href="https://www.service-public.gouv.fr/particuliers/vosdroits/R43248" target="_blank" >
            <button className="w-full mt-8 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg flex items-center justify-center gap-2">
              S'inscrire pour voter
              <ArrowRight className="w-4 h-4" />
            </button>
            </a>
          </div>

          {/* Colonne 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-center mb-6">
              3 conditions pour voter
            </h3>

            <div className="space-y-6">
              {[
                "Détenir la nationalité française",
                "Résider à l'étranger - Au Tchad",
                "Être inscrit·e sur une liste électorale (S'insrire sur le registre de Français établis au Tchad)",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-900 mt-1" />
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
            <a  href="https://www.service-public.gouv.fr/particuliers/vosdroits/R51788" target="_blank" >
            <button className="w-full mt-12 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg flex items-center justify-center gap-2">
              Suis-je inscrit·e ?
              <ArrowRight className="w-4 h-4" />
            </button>
            </a>
          </div>

          {/* Colonne 3 */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-lg font-bold text-center mb-8">
              3 façons de voter
            </h3>

            <div className="space-y-8">
              
              {/* Urne */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold underline">
                    Vote à l'urne
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Lieux et horaires communiqués par le consulat.
                  </p>
                </div>
              </div>

              {/* Procuration */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold underline">
                    Vote par procuration
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Via une personne inscrite sur la même liste.
                  </p>
                </div>
              </div>

              {/* Internet */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold underline">
                    Vote en ligne
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Du 22 au 27 mai 2026.
                  </p>
                </div>
              </div>
            </div>
            <a  href="https://www.service-public.gouv.fr/particuliers/vosdroits/R51788" target="_blank" >
            <button className="w-full mt-8 bg-white text-gray-900 py-4 rounded-lg flex items-center justify-center gap-2">
              Vérifier mes infos 
              <ArrowRight className="w-4 h-4" />
            </button>
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
}