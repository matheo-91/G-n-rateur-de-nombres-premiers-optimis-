import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/Button.jsx";
import logo from "../assets/logo_tp_nombre_premier.svg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const features = [
    {
      icon: "🎲",
      title: "Génération Aléatoire",
      description: "Récupérez des nombres aléatoires via une API simulée avec TanStack Query",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🔍",
      title: "Vérification Optimisée",
      description: "Algorithme optimisé pour déterminer si un nombre est premier avec cache interne",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: "✅",
      title: "Validation Stricte",
      description: "Validation des données avec Zod pour garantir l'intégrité des informations",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Optimisation avec useMemo et cache pour éviter les recalculs inutiles",
      color: "from-blue-400 to-blue-500",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "API Simulée",
      description: "TanStack Query gère les appels asynchrones et le cycle de vie des données",
    },
    {
      step: "2",
      title: "Validation Zod",
      description: "Chaque donnée est validée pour garantir qu'elle correspond au format attendu",
    },
    {
      step: "3",
      title: "Logique Métier",
      description: "Zustand stocke l'état et détermine si le nombre est premier",
    },
    {
      step: "4",
      title: "Affichage",
      description: "L'interface affiche le résultat avec une mise en forme claire et moderne",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center fade-in">
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="Prime Generator Logo" className="w-16 h-16" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-4">
            Générateur de
            <span className="block text-blue-600 mt-2">Nombres Premiers</span>
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Découvrez si un nombre est premier grâce à un algorithme optimisé
            et une architecture moderne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/primes">
              <Button variant="primary" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
                Commencer maintenant
              </Button>
            </Link>
            <a href="#features">
              <Button variant="secondary" className="text-lg px-8 py-4">
                En savoir plus
              </Button>
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-blue-100 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Comment ça fonctionne ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-700 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à explorer les nombres premiers ?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Testez notre générateur et découvrez si vos nombres sont premiers
            avec une interface moderne et intuitive
          </p>
          <Link to="/primes">
            <button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 text-lg px-8 py-4 shadow-lg rounded-lg font-medium transition-colors duration-200">
              Essayer maintenant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
