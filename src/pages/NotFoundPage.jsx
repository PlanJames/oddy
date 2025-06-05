import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center py-20">
    <h1 className="text-5xl font-bold mb-4 gradient-text">Página no encontrada</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Lo sentimos, la página que buscás no existe.</p>
    <Link to="/" className="text-primary underline">Volver al inicio</Link>
  </div>
);

export default NotFoundPage;
