import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, DollarSign, BarChart2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import OddyLogo from '@/components/icons/OddyLogo';

export const featureCardsData = [
  {
    title: 'Control de Stock',
    description: 'Mantené tu inventario al día, evitá faltantes y optimizá tus compras.',
    icon: Package,
    color: 'from-blue-500 to-blue-700',
    features: [
      'Alertas de stock mínimo',
      'Reconteo de inventario físico',
      'Rotación de productos (ABC analysis)',
    ],
  },
  {
    title: 'Gestión de Ventas',
    description: 'Registrá tus ventas de forma rápida y sencilla. Generá tickets y controlá tu caja.',
    icon: DollarSign,
    color: 'from-green-500 to-green-700',
    features: [
      'Facturación electrónica',
      'Control de caja y arqueo automático',
      'Devoluciones y descuentos',
    ],
  },
  {
    title: 'Reportes Detallados',
    description: 'Analizá el rendimiento de tu negocio con informes claros y personalizables.',
    icon: BarChart2,
    color: 'from-yellow-500 to-yellow-700',
    features: [
      'Comparativas mensuales y anuales',
      'Exportación a Excel y PDF',
      'Reportes por categoría o producto',
    ],
  },
  {
    title: 'Proveedores y Precios',
    description: 'Administrá tus proveedores y listas de precios de manera eficiente.',
    icon: Users,
    color: 'from-purple-500 to-purple-700',
    features: [
      'Historial de compras por proveedor',
      'Condiciones de pago personalizadas',
      'Actualización masiva de precios',
    ],
  },
];


const HomePage = () => {
  const { toast } = useToast();
  return (
    <>
      <header className="text-center py-16 md:py-24 bg-gradient-primary-hero rounded-xl shadow-2xl mb-16 relative overflow-visible">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <div className="flex items-center justify-center gap-2">
              <OddyLogo className="h-8 md:h-12 w-auto inline-block relative top-[7px] align-text-bottom mr-[.1px]" />
                <span className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">ddy</span>
              </div>
              <div className="gradient-text font-extrabold text-center px-2">
                <p className="text-4xl sm:text-5xl md:text-6xl leading-[1.35]">Tu Negocio,</p>
                <p className="text-6xl font-extrabold leading-[1.4]">Más Eficiente y Moderno.</p>
              </div>
            </div>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto px-4"
          >
            Gestioná tu stock, ventas, proveedores y precios de forma simple e inteligente. ¡Potenciá tu negocio hoy mismo!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-100 font-bold shadow-lg btn-animated w-full sm:w-auto"
              onClick={() => toast({ title: "Prueba Gratis Solicitada!", description: "Pronto nos pondremos en contacto con vos." })}
            >
              Solicitar Prueba Gratis
            </Button>
            <Button 
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 font-bold shadow-lg btn-animated w-full sm:w-auto"
              onClick={() => window.location.href = '/contacto'}
            >
              Contactanos
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </header>

      <section id="funcionalidades-home" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Todo lo que necesitás para <span className="gradient-text">tu Negocio</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCardsData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-animated glassmorphism border-purple-500/30">
                <CardHeader className="items-center text-center">
                  <div className={`feature-card-icon-wrapper bg-gradient-to-br ${feature.color}`}>
                    <feature.icon size={32} />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-lg my-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">¿Listo para transformar tu negocio?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Dejá atrás los excels y los cálculos manuales. Con Oddy, tenés el control total de tu negocio en un solo lugar.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-cta text-white font-bold shadow-lg btn-animated"
            onClick={() => toast({ title: "¡Excelente Decisión!", description: "Comunicate con nosotros para empezar." })}
          >
            ¡Quiero Empezar Ahora!
          </Button>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Mirá cómo funciona
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Simple, Rápido y Eficaz</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Nuestra interfaz está diseñada para que encuentres todo lo que necesitás en segundos. Registrá ventas, cargá productos y consultá reportes sin complicaciones.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ideal para negocios de todos los tamaños, desde el más chiquito hasta cadenas con múltiples sucursales.
            </p>
            <Button variant="secondary" asChild>
              <Link to="/funcionalidades">Conocé más funcionalidades</Link>
            </Button>
          </div>
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              alt="Captura de pantalla del sistema Oddy mostrando un dashboard amigable"
              className="max-w-[400px] w-full h-auto object-cover rounded-xl shadow-xl"
              src="https://images.unsplash.com/photo-1571677246347-5040036b95cc"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
