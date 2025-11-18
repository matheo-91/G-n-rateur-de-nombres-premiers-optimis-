/**
 * Molecule: CTAButton
 * Bouton Call-to-Action stylisé
 */
export function CTAButton({ children, onClick, className = "" }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 text-lg px-8 py-4 shadow-lg rounded-lg font-medium transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

