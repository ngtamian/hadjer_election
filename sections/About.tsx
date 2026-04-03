"use client"
import { User, MapPin, Briefcase, GraduationCap, Award, Heart, Target, Users } from 'lucide-react';

export function About() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Notre équipe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Une équipe <span className="text-gradient">engagée</span> pour vous
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez les visages de notre candidature et notre vision commune pour l'avenir de la commune.
          </p>
        </div>

        {/* Candidats */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Candidate Principale - Kaltouma HADJER */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-blue-200 shadow-md">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/9cbf4e0b-926f-431b-b27a-11c5ac3bd8df/corporate-headshots-professional-photography-connecticut-ct-photo-studio-nlalor-what-to-wear-women.jpg" 
                    alt="Kaltouma HADJER - Candidate principale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Titulaire
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Kaltouma HADJER</h3>
                <p className="text-blue-600 font-medium mb-4">Candidate principale</p>
                
                <div className="prose prose-sm text-slate-600 mb-4">
                  <p className="leading-relaxed">
                    Née et raised dans notre belle commune, j'ai toujours été profondément attachée à notre territoire et à ses habitants. Après 15 ans d'engagement associatif et professionnel au service du public, j'ai décidé de me présenter pour apporter une vision moderne et dynamique.
                  </p>
                  <p className="leading-relaxed">
                    Ma candidature est portée par une conviction forte : notre commune mérite une gouvernance à l'écoute, transparente et tournée vers l'avenir.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Racines locales</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                    <span>Sciences politiques</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                    <span>15 ans expérience</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Heart className="w-4 h-4 text-blue-500" />
                    <span>Engagement associatif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suppléant - Ahmed BENALI */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-slate-300 shadow-md">
                  <img 
                    src="https://t3.ftcdn.net/jpg/06/16/55/08/360_F_616550819_rnEcH9vVVcep0dZgvAd3k8nn840uAueP.jpg" 
                    alt="Ahmed BENALI - Suppléant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-slate-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Suppléant
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Ahmed BENALI</h3>
                <p className="text-slate-500 font-medium mb-4">Candidat suppléant</p>
                
                <div className="prose prose-sm text-slate-600 mb-4">
                  <p className="leading-relaxed">
                    Entrepreneur local et passionné par le développement économique territorial, je mets mon expertise au service de notre commune. Fort de 20 ans d'expérience dans la gestion d'entreprises et l'accompagnement des projets locaux.
                  </p>
                  <p className="leading-relaxed">
                    Je partage pleinement la vision de Kaltouma : une commune innovante, solidaire et tournée vers l'avenir. Ensemble, nous formerons un binôme complémentaire au service de tous.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Target className="w-4 h-4 text-slate-500" />
                    <span>Entrepreneur</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Award className="w-4 h-4 text-slate-500" />
                    <span>Expertise économique</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span>20 ans expérience</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-4 h-4 text-slate-500" />
                    <span>Accompagnement projets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision commune */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Notre vision commune</h3>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              "L'avenir de notre commune se construit ensemble, avec la participation de chacun. Nous voulons bâtir une ville où innovation et tradition se rencontrent, où chaque citoyen trouve sa place et peut s'épanouir."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Écoute</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Transparence</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Innovation</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Solidarité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}