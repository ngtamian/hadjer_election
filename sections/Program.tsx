"use client"
import { Leaf, Home, Bus, Users, Shield, Lightbulb } from 'lucide-react';

const proposals = [
  {
    icon: Leaf,
    title: 'Environnement',
    description: 'Développement d\'espaces verts, transition écologique et préservation de notre patrimoine naturel.',
    color: 'bg-green-100 text-green-700',
    items: ['Création de jardins partagés', 'Développement des pistes cyclables', 'Programme de rénovation énergétique']
  },
  {
    icon: Home,
    title: 'Education',
    description: 'Politique du logement ambitieuse pour garantir à chacun un toit digne et abordable.',
    color: 'bg-orange-100 text-orange-700',
    items: ['Construction de logements sociaux', 'Réhabilitation du parc existant', 'Aide à l\'accession propriété']
  },
  {
    icon: Bus,
    title: 'Emploi et Formation',
    description: 'Amélioration des transports et des déplacements pour une commune accessible à tous.',
    color: 'bg-blue-100 text-blue-700',
    items: ['Renforcement des transports en commun', 'Création de parkings relais', 'Navettes électriques']
  },
  {
    icon: Users,
    title: 'Action Social et Solidaire',
    description: 'Renforcement des liens sociaux et accompagnement des plus vulnérables.',
    color: 'bg-pink-100 text-pink-700',
    items: ['Centre communal d\'action sociale', 'Accompagnement des seniors', 'Aide aux familles']
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Préservation de la tranquillité publique et renforcement de la prévention.',
    color: 'bg-purple-100 text-purple-700',
    items: ['Éclairage public LED', 'Caméras de surveillance', 'Police municipale renforcée']
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Transformation numérique et modernisation des services publics.',
    color: 'bg-yellow-100 text-yellow-700',
    items: ['Mairie numérique', 'Wi-Fi public gratuit', 'Open data citoyenne']
  }
];

export function Program() {
  return (
    <section id="programme" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Notre Programme
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Des projets <span className="text-gradient">concrets</span> pour tous
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Six axes prioritaires pour améliorer concrètement le quotidien des Français du Tchad et renforcer notre communauté.
          </p>
        </div>

        {/* Proposals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${proposal.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <proposal.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {proposal.title}
              </h3>
              <p className="text-slate-600 mb-5 leading-relaxed">
                {proposal.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2">
                {proposal.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <div className="text-left">
              <p className="font-semibold text-slate-800">Téléchargez le programme complet</p>
              <p className="text-sm text-slate-600">Consultez tous nos projets en détail</p>
            </div>
            <button className="px-6 py-3 bg-gradient-blue text-white font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
              Télécharger le PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
