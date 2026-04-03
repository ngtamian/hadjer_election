"use client"
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Qui suis-je ?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Une femme <span className="text-gradient">engagée</span> pour vous
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez mon parcours, mes valeurs et ma vision pour notre commune.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio Text */}
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-600">
              <p className="leading-relaxed">
                Née et raised dans notre belle commune, j'ai toujours été profondément attachée à notre territoire et à ses habitants. Après 15 ans d'engagement associatif et professionnel au service du public, j'ai décidé de me présenter aux élections communales pour apporter une vision moderne et dynamique à notre municipalité.
              </p>
              <p className="leading-relaxed">
                Ma candidature est portée par une conviction forte : notre commune mérite une gouvernance à l'écoute, transparente et tournée vers l'avenir. Je veux construire une ville où chaque citoyen se sent entendu, respecté et impliqué dans les décisions qui façonnent notre quotidien.
              </p>
              <p className="leading-relaxed">
                Ensemble, nous pouvons faire de notre commune un modèle de développement durable, d'innovation sociale et de cohésion citoyenne. C'est avec humilité, détermination et passion que je me mets au service de notre collectivité.
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-6 border-l-4 border-blue-500">
              <p className="text-xl italic text-slate-700 font-medium">
                "L'avenir de notre commune se construit ensemble, avec la participation de chacun."
              </p>
              <p className="mt-2 text-blue-600 font-semibold">— Kaltouma HADJER</p>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Racines locales</h3>
              <p className="text-slate-600 text-sm">
                Née dans la commune, profondément attachée à notre territoire et à ses traditions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Formation</h3>
              <p className="text-slate-600 text-sm">
                Diplômée en sciences politiques et gestion publique, formée aux enjeux territoriaux.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expérience</h3>
              <p className="text-slate-600 text-sm">
                15 ans d'expérience dans la gestion de projets publics et l'accompagnement des citoyens.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Engagement</h3>
              <p className="text-slate-600 text-sm">
                Membre active de nombreuses associations locales, engagée pour la solidarité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
