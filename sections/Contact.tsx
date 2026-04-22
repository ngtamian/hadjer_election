"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  Mail,
  Phone,
  MapPin,
  Send,

} from 'lucide-react';

import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé avec succès ! Nous vous répondrons rapidement.');
    setFormData({ name: '',firstName: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] text-white rounded-full text-lg sm:text-xl font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Restons en <span className="text-gradient">contact</span>
          </h2>
         <p className="text-lg font-semibold text-slate-600 max-w-2xl mx-auto whitespace-nowrap">
  Une question, une suggestion ? N'hésitez pas à nous contacter. Nous sommes à votre écoute.
</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Siège de campagne</h3>
                  <p className="text-slate-600">N'Djamena-Tchad</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600">A Venir</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Téléphone</h3>
                  <p className="text-slate-600">+235 66 04 40 60</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/TousUnisTchadFrance" target="_blank"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Horaires d'ouverture</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">10h - 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
           <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] bg-clip-text text-transparent">
              Envoyez-nous un message ou une procuration
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-1 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Prenom</Label>
                  <Input
                    id="name"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Nom</Label>
                  <Input
                    id="name"
                    placeholder="Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-bold">Numéro NUMIC</Label>
                <Input
                  id="subject"
                  placeholder="Votre Numéro d' identification Consulaire (NUMIC)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold">Message</Label>
                <Textarea
                  id="message"
                  placeholder="N'hésitez pas à nous envoyer vos messages ou questions directement ici..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white resize-none"
                />
              </div>
                <Button
              type="submit"
        className="w-full bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] text-white py-6 text-xl font-semibold rounded-xl hover:opacity-90 transition-all"
          >
         <Send className="w-5 h-5 mr-2" />
          Envoyer
          </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
