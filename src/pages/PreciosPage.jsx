import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from '@/components/icons/CheckCircleIcon';

const pricingPlans = [
  { 
    name: 'Monocaja', 
    price: 'USD 60', 
    features: [
      'Licencia para una sola computadora',
      'Facturación electrónica',
      'Actualizaciones por 12 meses',
      'Soporte Técnico Preferencial por 12 meses',
      '5hs de capacitación presencial (aplica unicamente Rosario) y 1 año de capacitación a distancia parcial. Videollamadas 1v1. '
    ], 
    popular: false,
    color: 'from-purple-500 to-purple-600', 
    buttonClass: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' 
  },
  { 
    name: 'Multicaja', 
    price: 'USD 90', 
    features: [
      'Licencia para computadoras ilimitadas, se comparte la misma información',
      'Facturación electrónica',
      'Actualizaciones por 12 meses',
      'Soporte Técnico Preferencial por 12 meses',
      '5hs de capacitación presencial (aplica unicamente Rosario) y 1 año de capacitación a distancia parcial. Videollamadas 1v1.'
    ], 
    popular: false, 
    color: 'from-blue-500 to-blue-600', 
    buttonClass: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white' 
  },
];

const PreciosPage = () => (
  <>
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4 gradient-text">Planes y Precios</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Elegí el plan que mejor se adapte al tamaño y las necesidades de tu negocio. Precios transparentes, sin sorpresas.
      </p>
    </div>
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative flex flex-col h-full rounded-xl shadow-2xl overflow-hidden card-animated ${plan.popular ? 'border-4 border-yellow-400' : 'border border-gray-200 dark:border-gray-700'}`}
        >
          {plan.popular && (
            <div className="price-card-popular-badge">MÁS POPULAR</div>
          )}
          <div className={`p-8 bg-gradient-to-br ${plan.color} text-white text-center`}>
            <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-1">{plan.price}</p>
            <p className="text-sm opacity-80">por mes</p>
          </div>
          <div className="p-8 flex-grow bg-white dark:bg-gray-800">
            <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full font-bold btn-animated ${plan.buttonClass}`}
              size="lg"
              asChild
            >
              <Link to="/register">Elegir Plan</Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="mt-16 text-center text-gray-600 dark:text-gray-300">
      <p className="text-lg">¿Necesitás un plan a medida o tenés dudas? <Link to="/contacto" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">Contactanos</Link> y te asesoramos.</p>
    </div>
  </>
);

export default PreciosPage;