import React from 'react';
import { Phone } from 'lucide-react';
import OddyLogo from '@/components/icons/OddyLogo';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center text-lg mb-2">
        <OddyLogo className="h-6 w-auto mr-1" />
        <span className="font-semibold">ddy</span>
        <span className="mx-1">&copy;</span> 
        <span>{new Date().getFullYear()}</span>
      </div>
      <p className="text-sm">Modernizando tu negocio, simplificando tu gestión.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="tel:+5491112345678" className="hover:text-purple-400 transition-colors" aria-label="Llamar por teléfono">
          <Phone size={20}/>
        </a>
        <a href="mailto:info@oddy.com.ar" className="hover:text-purple-400 transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;