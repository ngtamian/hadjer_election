"use client"
import { Leaf, Home, Bus, Users, Shield, Lightbulb } from 'lucide-react';

const proposals = [

   {
    icon: Lightbulb,
    title: 'SERVICE CONSULAIRE DE PROXIMITE MODERNE ET A VALEUR HUMAINE',
    description: 'Le consulat doit être un service proche, accessible et efficace, et non une administration distante.',
    color: 'bg-yellow-100 text-yellow-700',
    items: ['Systématisation des tournées et permanences', 'Défense des guichets physiques et numérisation inclusive', 'Accompagnement personnalise']
  },
  
  {
    icon: Home,
    title: 'ÉDUCATION INCLUSIVE, CULTURE PARTICIPATIVE ET RAYONNEMENT FRANÇAIS',
    description: 'L’école française au Tchad est bien plus qu’un lieu d’enseignement : elle est un pilier de savoir, de mixité sociale, de transmission des valeurs et de dialogue avec la société tchadienne.',
    color: 'bg-orange-100 text-orange-700',
    items: ['Défense de l’école française et amélioration des bourses', 'Amélioration du climat de confiance et de sérénité au lycée français Montaigne', 'Soutien aux associations FLAM et politique culturelle ouverte', 'Liens avec les acteurs locaux']
  },
  {
    icon: Leaf,
    title: 'SANTE, PROTECTION SOCIALE ET BIEN-ETRE',
    description: 'Face aux démarches complexes et aux risques sanitaires, il est essentiel d’assurer un accès simple et humain aux droits pour tous les compatriotes, y compris au-delà des frontières.',
    color: 'bg-green-100 text-green-700',
    items: ['Information et lutte contre le non-recours', 'Défense d’un meilleur accès à la protection sociale', 'Accompagnement global du bien-être']
  },
  {
    icon: Bus,
    title: 'EMPLOI, FORMATION PROFESSIONNELLE ET RAYONNEMENT ECONOMIQUE DE LA FRANCE',
    description: 'Valoriser les compétences de la communauté française tout en développant des partenariats économiques locaux équitables et bénéfiques pour tous.',
    color: 'bg-blue-100 text-blue-700',
    items: ['Soutien à l’emploi et à la formation', 'Renforcement de la présence économique française', 'Promotion de la formation professionnelle']
  },
  {
    icon: Users,
    title: 'COHESION SOCIALE, SOLIDARITE ET VIVRE-ENSEMBLE AU SEIN DE LA COMMUNAUTE FRANÇAISE',
    description: 'Dans un contexte marqué par l’éloignement, le coût de la vie et des défis sécuritaires, il est essentiel de renforcer la cohésion des Français tout en valorisant leur diversité.',
    color: 'bg-pink-100 text-pink-700',
    items: ['Accompagnement des plus vulnérables', 'Lutte contre les violences et discriminations', 'Intégration des nouveaux arrivants et accompagnement spécifique des binationaux', 'Liens avec les acteurs locaux']
  },
  {
    icon: Shield,
    title: 'SECURITE, PROTECTION DES PERSONNES, APPUI AU DEPART ET ENGAGEMENT CITOYEN',
    description: 'Assurer la protection de toutes et de tous, en promouvant une France écologique, pacifique et solidaire, pleinement engagée aux côtés du Tchad.',
    color: 'bg-purple-100 text-purple-700',
    items: ['Sécurité et rapatriement', 'Appui concret au départ', 'Actions associatives, sportives, humanitaires et culturelles', 'Vision écologique et promotion de la paix']
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
