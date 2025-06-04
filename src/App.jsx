import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import PageLayout from '@/components/layout/PageLayout';

import HomePage from '@/pages/HomePage';
import FuncionalidadesPage from '@/pages/FuncionalidadesPage';
import PreciosPage from '@/pages/PreciosPage';
import FaqPage from '@/pages/FaqPage';
import ContactoPage from '@/pages/ContactoPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 text-foreground dark:text-gray-100 font-sans">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
              <Route path="/funcionalidades" element={<PageLayout><FuncionalidadesPage /></PageLayout>} />
              <Route path="/precios" element={<PageLayout><PreciosPage /></PageLayout>} />
              <Route path="/faq" element={<PageLayout><FaqPage /></PageLayout>} />
              <Route path="/contacto" element={<PageLayout><ContactoPage /></PageLayout>} />
              <Route path="/register" element={<PageLayout><RegisterPage /></PageLayout>} />
              <Route path="/login" element={<PageLayout><LoginPage /></PageLayout>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
