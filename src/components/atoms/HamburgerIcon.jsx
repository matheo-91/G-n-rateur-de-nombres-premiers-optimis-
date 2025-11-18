/**
 * Atom: HamburgerIcon
 * Icône hamburger pour le menu mobile avec animation
 */
export function HamburgerIcon({ isOpen, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center items-center w-10 h-10 space-y-1.5 ${className}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span
        className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}

