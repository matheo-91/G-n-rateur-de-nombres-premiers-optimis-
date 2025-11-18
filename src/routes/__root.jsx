import { createRootRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import logo from "../assets/logo_tp_nombre_premier.svg";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate({ to: path });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="mt-auto" style={{ backgroundColor: '#0B0B9C', color: '#dbeafe' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* About */}
              <div>
                <h3 className="font-bold text-base mb-2 flex items-center" style={{ color: '#ffffff' }}>
                  <img src={logo} alt="Logo" className="w-6 h-6 mr-2" />
                  À propos
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#bfdbfe' }}>
                  Générateur de nombres premiers optimisé avec une architecture
                  moderne et professionnelle utilisant les dernières technologies
                  React.
                </p>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#ffffff' }}>Architecture</h3>
                <p className="text-xs mb-2" style={{ color: '#bfdbfe' }}>
                  Cette application suit une architecture professionnelle avec
                  séparation des responsabilités :
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <ul className="space-y-1 text-xs" style={{ color: '#93c5fd' }}>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: '#60a5fa' }}>•</span>
                      <span>
                        <strong style={{ color: '#dbeafe' }}>Store (Zustand) :</strong>{" "}
                        Logique métier uniquement, pas de code réseau
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: '#60a5fa' }}>•</span>
                      <span>
                        <strong style={{ color: '#dbeafe' }}>TanStack Query :</strong>{" "}
                        Gestion des appels asynchrones
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: '#60a5fa' }}>•</span>
                      <span>
                        <strong style={{ color: '#dbeafe' }}>Service :</strong>{" "}
                        Fonctions métier pures (vérification des nombres premiers)
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-1 text-xs" style={{ color: '#93c5fd' }}>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: '#60a5fa' }}>•</span>
                      <span>
                        <strong style={{ color: '#dbeafe' }}>Schemas (Zod) :</strong>{" "}
                        Validation des données
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: '#60a5fa' }}>•</span>
                      <span>
                        <strong style={{ color: '#dbeafe' }}>Components :</strong>{" "}
                        Composants réutilisables et pages
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#ffffff' }}>Navigation</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      className="transition-colors text-xs hover:text-white cursor-pointer text-left"
                      style={{ color: '#bfdbfe', background: 'none', border: 'none', padding: 0 }}
                      onClick={() => handleNavigation('/')}
                    >
                      Accueil
                    </button>
                  </li>
                  <li>
                    <button
                      className="transition-colors text-xs hover:text-white cursor-pointer text-left"
                      style={{ color: '#bfdbfe', background: 'none', border: 'none', padding: 0 }}
                      onClick={() => handleNavigation('/primes')}
                    >
                      Générateur de Nombres Premiers
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 pt-4 text-center text-xs" style={{ borderTopColor: '#1e3a8a', borderTopWidth: '1px', color: '#93c5fd' }}>
              <p>© 2025 Générateur de Nombres Premiers. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
