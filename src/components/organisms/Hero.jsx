import { Link } from "@tanstack/react-router";
import { Logo, Heading, Typography, Button } from "../atoms/index.js";

/**
 * Organism: Hero
 * Section hero de la page d'accueil avec logo, titre et boutons CTA
 */
export function Hero({ logoSrc, title, subtitle, primaryCTA, secondaryCTA }) {
  return (
    <div className="text-center fade-in">
      <div className="mb-6 flex justify-center">
        <Logo src={logoSrc} alt="Prime Generator Logo" />
      </div>
      <Heading level={1} className="text-blue-900 mb-4">
        {title.line1}
        <span className="block text-blue-600 mt-2">{title.line2}</span>
      </Heading>
      <Typography variant="primary" size="xl" className="mb-8 max-w-2xl mx-auto">
        {subtitle}
      </Typography>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={primaryCTA.link}>
          <Button 
            variant="primary" 
            className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            {primaryCTA.text}
          </Button>
        </Link>
        <a href={secondaryCTA.link}>
          <Button variant="secondary" className="text-lg px-8 py-4">
            {secondaryCTA.text}
          </Button>
        </a>
      </div>
    </div>
  );
}

