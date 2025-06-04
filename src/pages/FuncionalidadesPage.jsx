import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { featureCardsData } from './HomePage'; // Reutilizamos los datos de HomePage

const FuncionalidadesPage = () => (
  <>
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4 gradient-text">Funcionalidades Destacadas</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Descubrí todo lo que Oddy puede hacer por tu negocio.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {featureCardsData.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 glassmorphism border-purple-500/20 card-animated">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                <feature.icon size={28} />
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">{feature.description}</CardDescription>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Package size={18} className="mr-2 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    <div className="mt-16 text-center">
      <img   
        alt="Persona usando el sistema Oddy en una tablet con fondo de un local comercial moderno" 
        className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-8" src="https://images.unsplash.com/photo-1649424219286-388dc64da26a" />
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
        Y mucho más... Oddy se adapta a tus necesidades.
      </p>
      <Button size="lg" asChild className="bg-gradient-cta text-white font-bold btn-animated">
        <Link to="/contacto">Solicitá una Prueba Gratis</Link>
      </Button>
    </div>
  </> 
);

export default FuncionalidadesPage;