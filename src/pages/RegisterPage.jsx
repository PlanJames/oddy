import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    try {
        const response = await fetch("https://plum-dugong-581682.hostingersite.com/backend/register.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });
        const data = await response.json();

        if (data.status === "success") {
        alert("¡Registro exitoso!");
        } else {
        alert("Error al registrar: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al conectar con el servidor.");
    }
    };


  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Crear Cuenta</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Registrate para empezar a gestionar tu negocio con Oddy.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl glassmorphism border-purple-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Pérez"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" size="lg" className="w-full bg-gradient-cta text-white font-bold py-3 btn-animated">
              Registrarme
            </Button>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
