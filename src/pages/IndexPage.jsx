import { HomeTemplate } from "../components/templates/index.js";
import logo from "../assets/logo_tp_nombre_premier.svg";

/**
 * Page: IndexPage
 * Page d'accueil du générateur de nombres premiers
 * Fournit les données au HomeTemplate
 */
export function IndexPage() {
  const heroData = {
    logoSrc: logo,
    title: {
      line1: "Générateur de",
      line2: "Nombres Premiers",
    },
    subtitle: "Découvrez si un nombre est premier grâce à un algorithme optimisé et une architecture moderne",
    primaryCTA: {
      text: "Commencer maintenant",
      link: "/primes",
    },
    secondaryCTA: {
      text: "En savoir plus",
      link: "#features",
    },
  };

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

  const howItWorks = {
    title: "Comment ça fonctionne ?",
    steps: [
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
    ],
  };

  const ctaData = {
    title: "Prêt à explorer les nombres premiers ?",
    description: "Testez notre générateur et découvrez si vos nombres sont premiers avec une interface moderne et intuitive",
    buttonText: "Essayer maintenant",
    buttonLink: "/primes",
  };

  return (
    <HomeTemplate 
      heroData={heroData}
      features={features}
      howItWorks={howItWorks}
      ctaData={ctaData}
    />
  );
}
