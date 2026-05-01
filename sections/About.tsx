"use client"
import { User, MapPin, Briefcase, GraduationCap, Award, Heart, Target, Users } from 'lucide-react';

export function About() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
        <span className="inline-block px-5 py-2 bg-white text-[#7C3AED] rounded-full text-xl font-semibold mb-4 border border-black/20">
          Notre équipe
            </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] text-white rounded-full">
           Une équipe engagée pour vous
           </span>
        </h2>
          <p className="text-base sm:text-lg font-bold text-slate-700">
            Découvrez les visages de notre candidature et notre vision commune pour l’avenir des Français au Tchad
          </p>
        </div>

        {/* Candidats */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Candidate Principale - Cathy HADJER */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative shrink-0">
                <div className="w-32 h-34 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-blue-200 shadow-md">
                  <img 
                    src="/cathya.jpg" 
                    alt="Cathy HADJER - Candidate principale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Candidate
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Cathy HADJER</h3>
                {/* <p className="bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] bg-clip-text text-transparent font-medium mb-4">Candidate principale</p> */}
                
                <div className="prose prose-sm text-slate-600 mb-4">
                  <p className="leading-relaxed">
                    Ingénieure en informatique, forte de 13 années d’expérience dans la digitalisation des processus, le traitement des données massives, le Big Data et l’analyse avancée.
                    Je m’engage aux côtés de la communauté française au Tchad. Profondément attachée à notre identité culturelle et à nos compatriotes, je consacre depuis plus de vingt ans mon énergie à la vie associative et politique.
                  </p>
                  <p className="leading-relaxed">
                    Ma candidature s’appuie sur une conviction profonde : notre communauté mérite une représentation attentive, transparente et résolument engagée au service de l’ensemble des Français du Tchad.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mt-10">
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <MapPin className="w-4 h-4 text-[#C026D3]" />
                    <span>Racines locales</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <GraduationCap className="w-4 h-4 text-[#C026D3]" />
                    <span>Ingénieure Informatique</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Briefcase className="w-4 h-4 text-[#C026D3]" />
                    <span>13 ans expérience</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Heart className="w-4 h-4 text-[#C026D3]"/>
                    <span>Engagement associatif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suppléant - Mathieu GBEKAN */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-slate-300 shadow-md">
                  <img 
                    src="/Mathieuu.jpg" 
                    alt="Mathieu GBEKAN - Suppléant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-black text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Suppléant
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Mathieu GBEKAN</h3>
                {/* <p className="text-black font-bold mb-4">Candidat suppléant</p> */}
                
                <div className="prose prose-sm text-slate-600 mb-4">
                  <p className="leading-relaxed">
                    Expert en conception et mise en œuvre de projets d'investissements et de développement, avec plus de 30 années d’expérience dans la mobilisation de ressources, le financement international et le montage de partenariats public-privé. J’offre à ma communauté française au Tchad, mon entière disponibilité afin d’en assurer le dynamisme et le rayonnement.
                  </p>
                  <p className="leading-relaxed">
                    Je souscris pleinement à la vision portée par Cathy, celle d’une communauté innovante, solidaire et résolument tournée vers l’avenir. Ensemble, nous constituons un binôme complémentaire, soudé par un engagement commun au service de tous les ressortissants français du Tchad.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Target className="w-4 h-4 text-[#C026D3]" />
                    <span>Entrepreneur</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Award className="w-4 h-4 text-[#C026D3]" />
                    <span>Expertise économique</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Users className="w-4 h-4 text-[#C026D3]" />
                    <span>30 ans expérience</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <User className="w-4 h-4 text-[#C026D3]" />
                    <span>Accompagnement projets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision commune */}
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Notre vision commune</h3>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8 font-bold">
              Avec engagement, nous portons un projet social, solidaire et écologique pour les Français du Tchad, dans un esprit de paix et d’unité.<br/>
              Vivre à l’étranger ne doit jamais signifier être un citoyen de seconde zone.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl font-bold">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Écoute</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Transparence</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Écologique </span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Solidarité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}