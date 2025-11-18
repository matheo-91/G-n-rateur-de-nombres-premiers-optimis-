import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "../../assets/logo_tp_nombre_premier.svg";

/**
 * Organism: Header
 * Header avec navigation et menu mobile responsive
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md border-b border-blue-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Prime Generator Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-blue-900">
                Prime Generator
              </span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              to="/"
              className="text-blue-700 hover:text-blue-900 inline-flex items-center px-3 py-2 border-b-2 border-transparent text-sm font-medium transition-colors"
              activeProps={{
                className: "border-blue-500 text-blue-900 font-semibold",
              }}
            >
              Accueil
            </Link>
            <Link
              to="/primes"
              className="text-blue-700 hover:text-blue-900 inline-flex items-center px-3 py-2 border-b-2 border-transparent text-sm font-medium transition-colors"
              activeProps={{
                className: "border-blue-500 text-blue-900 font-semibold",
              }}
            >
              Nombres Premiers
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-blue-200">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              activeProps={{
                className: "text-blue-900 font-semibold bg-blue-50",
              }}
            >
              Accueil
            </Link>
            <Link
              to="/primes"
              onClick={closeMenu}
              className="block text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              activeProps={{
                className: "text-blue-900 font-semibold bg-blue-50",
              }}
            >
              Nombres Premiers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

