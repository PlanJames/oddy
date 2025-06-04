import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    negocio: '',
    encargado: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validarPassword = (password) => {
    const tieneLongitud = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    return tieneLongitud && tieneMayuscula && tieneMinuscula && tieneNumero;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarPassword(formData.password)) {
      toast({
        title: "Contraseña inválida",
        description: "Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://plum-dugong-581682.hostingersite.com/backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          negocio: formData.negocio,
          encargado: formData.encargado,
          telefono: formData.telefono,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        toast({
          title: "¡Registro exitoso!",
          description: "Ya podés iniciar sesión con tus datos.",
        });
      } else {
        toast({
          title: "Error al registrar",
          description: data.message || "Ocurrió un error inesperado.",
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
        <h1 className="text-5xl font-bold mb-4 gradient-text">Crear Cuenta</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Completá los datos para empezar a gestionar tu negocio con Oddy.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl glassmorphism border-purple-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre del negocio */}
          <div>
            <label htmlFor="negocio" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Nombre del negocio
            </label>
            <input
              type="text"
              name="negocio"
              id="negocio"
              value={formData.negocio}
              onChange={handleChange}
              required
              placeholder="Mi Kiosco"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          {/* Encargado */}
          <div>
            <label htmlFor="encargado" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Nombre de la persona encargada
            </label>
            <input
              type="text"
              name="encargado"
              id="encargado"
              value={formData.encargado}
              onChange={handleChange}
              required
              placeholder="Juan Pérez"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Teléfono de contacto
            </label>
            <PhoneInput
              country={'ar'}
              value={formData.telefono}
              onChange={(telefono) => setFormData(prev => ({ ...prev, telefono }))}
              enableSearch
              inputClass="!w-full py-3 pl-16 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:ring-purple-500 focus:outline-none shadow-sm"
              containerClass="!w-full"
              buttonClass="!border-r border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-2"
              dropdownClass="dark:bg-gray-800 dark:text-white"
              disableCountryCode={false}
              disableDropdown={false}
              countryCodeEditable={false}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              E-mail de contacto
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Contraseña para tu cuenta
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="********"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Debe contener mínimo 8 caracteres, una mayúscula, una minúscula y un número.
            </p>
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Confirmar Contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="********"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white shadow-sm focus:shadow-md transition-shadow pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" size="lg" className="w-full bg-gradient-cta text-white font-bold py-3 btn-animated">
              Crear Cuenta
            </Button>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
