import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, BarChart2, DollarSign, HelpCircle, Phone, Menu, X, LogIn, UserPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import OddyLogo from '@/components/icons/OddyLogo';

export const navLinks = [
  { name: 'Inicio', path: '/', icon: Home },
  { name: 'Funcionalidades', path: '/funcionalidades', icon: BarChart2 },
  { name: 'Precios', path: '/precios', icon: DollarSign },
  { name: 'Preguntas Frecuentes', path: '/faq', icon: HelpCircle },
  { name: 'Contacto', path: '/contacto', icon: Phone },
  { name: 'Login', path: '/login', icon: LogIn },
  { name: 'Prueba Gratis', path: '/crear-cuenta', icon: UserPlus },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <OddyLogo className="h-7 w-auto mr-1 relative top-[0.5px]" />
            <span className="text-white text-3xl font-bold">ddy</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out
                  ${location.pathname === link.path
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                <link.icon className="inline-block w-4 h-4 mr-2" />
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-purple-400">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                    ${location.pathname === link.path
                      ? 'bg-purple-600 text-white shadow'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  <link.icon className="inline-block w-5 h-5 mr-2" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
