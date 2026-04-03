"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Vote } from 'lucide-react';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#liste', label: 'Notre Liste' },
  { href: '#event', label: 'Evenements Calendrier' },
  { href: '#apropos', label: 'À propos' },
  { href: '#programme', label: 'Programme' },
  { href: '#contact', label: 'Nous Contacter' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#accueil" 
              onClick={(e) => handleLinkClick(e, '#accueil')}
              className="flex items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isScrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <Vote className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-blue-700'}`} />
              </div>
              <div className={`hidden sm:block ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                <p className="font-bold text-sm leading-tight">Kaltouma HADJER</p>
                <p className="text-xs text-blue-600 font-medium">2026</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-slate-700' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="bg-gradient-blue hover:opacity-90 text-white font-semibold rounded-xl"
              >
                Je soutiens
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div 
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-3 px-4 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <Button className="w-full bg-gradient-blue hover:opacity-90 text-white font-semibold rounded-xl py-6">
                Je soutiens
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
