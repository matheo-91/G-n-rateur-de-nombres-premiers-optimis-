# Générateur de Nombres Premiers

Application React pour générer et vérifier des nombres premiers avec une architecture moderne.

## Technologies

- React 19
- Vite
- TanStack Router
- TanStack Query
- Zustand
- Zod
- Tailwind CSS

## Architecture

Le projet suit le pattern Atomic Design :

- **Atoms** : Composants de base (Button, Input, Badge, Heading, etc.)
- **Molecules** : Groupes d'atomes (FeatureCard, PrimeResult, etc.)
- **Organisms** : Sections complexes (Header, Footer, Hero, etc.)
- **Templates** : Mises en page (Layout, HomeTemplate, PrimesTemplate)
- **Pages** : Instances avec données réelles

## Structure du projet

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── pages/
├── routes/
├── hooks/
├── stores/
├── schemas/
├── service/
└── api/
```

## Fonctionnalités

- Génération de nombres aléatoires via API simulée
- Vérification manuelle de nombres premiers
- Validation des données avec Zod
- Gestion d'état avec Zustand
- Cache et optimisation avec TanStack Query
- Navigation responsive avec menu mobile

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Principes

- Séparation des responsabilités
- Composants réutilisables
- État centralisé
- Validation stricte des données
- Performance optimisée avec useMemo et cache
