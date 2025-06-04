import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const LoginPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://plum-dugong-581682.hostingersite.com/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        toast({
          title: "Bienvenido, " + data.nombre,
          description: "Inicio de sesión exitoso.",
        });

        // Ejemplo: guardar en localStorage o redireccionar
        // localStorage.setItem("usuario", JSON.stringify(data));
        // window.location.href = "/panel";
      } else {
        toast({
          title: "Error de inicio de sesión",
          description: data.message || "Credenciales inválidas",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error del servidor",
        description: "No se pudo conectar con el backend.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Iniciar Sesión</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Accedé a tu cuenta para gestionar tu negocio con Oddy.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl glassmorphism border-purple-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tuemail@ejemplo.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-shadow shadow-sm focus:shadow-md"
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
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-shadow shadow-sm focus:shadow-md"
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" size="lg" className="w-full bg-gradient-cta text-white font-bold py-3 btn-animated">
              Iniciar Sesión
            </Button>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
