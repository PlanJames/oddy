import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { question: '¿Es difícil de usar el sistema Oddy?', answer: '¡Para nada! Diseñamos el sistema pensando en la facilidad de uso. Es intuitivo y no necesitás conocimientos técnicos avanzados.' },
  { question: '¿Puedo probar el sistema antes de contratarlo?', answer: '¡Claro que sí! Ofrecemos una prueba gratuita para que puedas conocer todas las funcionalidades y ver cómo se adapta a tu negocio.' },
  { question: '¿Qué tipo de soporte ofrecen?', answer: 'Contamos con un equipo de soporte técnico listo para ayudarte con cualquier duda o inconveniente que tengas. Podés contactarnos por email o teléfono.' },
  { question: '¿El sistema se actualiza?', answer: 'Sí, estamos constantemente mejorando y añadiendo nuevas funcionalidades al sistema. Las actualizaciones están incluidas en tu plan.' },
  { question: '¿Necesito instalar algo en mi computadora?', answer: 'No, Oddy es un sistema 100% online. Podés acceder desde cualquier dispositivo con conexión a internet (computadora, tablet o celular).' },
  { question: '¿Mis datos están seguros?', answer: '¡Absolutamente! La seguridad de tu información es nuestra prioridad. Utilizamos encriptación de datos y servidores seguros para proteger toda tu información.' },
];

const FaqPage = () => (
  <>
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4 gradient-text">Preguntas Frecuentes</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Encontrá respuestas a las dudas más comunes sobre Oddy.
      </p>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem value={`item-${index}`} className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden glassmorphism">
              <AccordionTrigger className="p-6 text-left text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
    <div className="mt-16 text-center">
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">¿No encontraste tu respuesta?</p>
      <Button size="lg" asChild className="bg-gradient-cta text-white font-bold btn-animated">
        <Link to="/contacto">Contactanos Directamente</Link>
      </Button>
    </div>
  </>
);

export default FaqPage;