"use client"
import { Vote, Heart, Mail } from 'lucide-react';

import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
const footerLinks = {
  navigation: [
    { href: '#accueil', label: 'Accueil' },
    { href: '#event', label: 'Evenements Calendrier' },
    { href: '#apropos', label: 'À propos' },
    { href: '#programme', label: 'Programme' },
    { href: '#contact', label: 'Contact' },
  ],
  programme: [
    { href: '#', label: 'Service Consulaire' },
    { href: '#', label: 'Education' },
    { href: '#', label: 'Santé' },
    { href: '#', label: 'Emploi, Formation' },
    { href: '#', label: 'Cohesion Social' },
    { href: '#', label: 'Sécurité' },
  ],
  legal: [
    { href: '#', label: 'Mentions légales' },
    { href: '#', label: 'Politique de confidentialité' },
    { href: '#', label: 'Cookies' },
  ],
};

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Vote className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Cathy HADJER</p>
                <p className="text-white font-bold text-sm">Candidate 2026</p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-6">
              Tous Ensemble, pour faire entendre notre voix. Une vision moderne, des projets concrets, une équipe passionnée.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white text-base sm:text-lg font-semibold hover:text-white/80 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programme */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Programme</h3>
            <ul className="space-y-3">
              {footerLinks.programme.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white text-base sm:text-lg font-semibold hover:text-white/80 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-white font-bold text-sm mb-4">
              Recevez nos actualités et invitations aux événements.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-black focus:outline-none focus:border-[#C026D3] transition-colors"              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl transition-colors border border-gray-300"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
             {/* Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> pour notre communauté Française*/}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-white text-base sm:text-lg font-semibold hover:text-white/80 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-white font-bold text-sm">
              © 2026 - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
