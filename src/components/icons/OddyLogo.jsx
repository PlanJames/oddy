import React from 'react';

const OddyLogo = ({ className = '', ...props }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
    {...props}
  >
    {/* Círculo exterior */}
    <circle cx="50" cy="50" r="45" stroke="#FFFFFF" strokeWidth="10" fill="none" />
    
    {/* Ojos */}
    <circle cx="35" cy="40" r="8" fill="#FFFFFF" />
    <circle cx="65" cy="40" r="8" fill="#FFFFFF" />
    
    {/* Sonrisa */}
    <path d="M30 65 Q50 80 70 65" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round" />
  </svg>
);

export default OddyLogo;
