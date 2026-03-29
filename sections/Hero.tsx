"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight, Vote, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Vote className="w-4 h-4" />
                <span>Élections Communales 2026</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-slate-800">Ensemble,</span>
                  <br />
                  <span className="text-gradient">construisons l'avenir</span>
                  <br />
                  <span className="text-slate-800">de notre commune</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                  Une vision moderne, des projets concrets, une équipe passionnée au service de tous les citoyens.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 "
                >
                  Découvrir mon programme
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all"
                >
                  <Heart className="mr-2 w-5 h-5" />
                  Soutenir la campagne
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">15+</div>
                  <div className="text-sm text-slate-500">Années d'engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-slate-500">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">100%</div>
                  <div className="text-sm text-slate-500">À l'écoute des citoyens</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Candidate Photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-3xl blur-2xl" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl rotate-12 opacity-20" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20" />
                
                {/* Photo Frame */}
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/candidate.jpg" 
                      alt="Candidate aux élections communales" 
                      className="w-full max-w-md h-auto object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
                  </div>
                  
                  {/* Name Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-lg">
                    <p className="text-lg font-bold text-slate-800">Kaltouma HADJE</p>
                    <p className="text-sm text-blue-600 font-medium">Candidate à la mairie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
