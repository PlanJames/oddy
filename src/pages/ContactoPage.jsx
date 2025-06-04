import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Ponete en Contacto</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          ¿Tenés alguna consulta o querés solicitar una demo de Oddy? ¡Estamos para ayudarte!
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl glassmorphism border-purple-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Nombre Completo</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Ej: Juan Pérez"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Correo Electrónico</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="tuemail@ejemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Tu Mensaje</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Contanos cómo podemos ayudarte..."
            ></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" size="lg" className="w-full bg-gradient-cta text-white font-bold py-3 btn-animated">
              Enviar Mensaje
            </Button>
          </motion.div>
        </form>
        <div className="mt-10 text-center text-gray-600 dark:text-gray-300">
          <p className="text-lg mb-2">También podés encontrarnos en:</p>
          <p>Email: <a href="mailto:info@oddy.com.ar" className="text-purple-600 dark:text-purple-400 hover:underline">info@oddy.com.ar</a></p>
          <p>Teléfono: <a href="tel:+5491112345678" className="text-purple-600 dark:text-purple-400 hover:underline">+54 9 11 1234-5678</a></p>
        </div>
      </div>
    </>
  );
};

export default ContactoPage;