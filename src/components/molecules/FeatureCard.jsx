import { Badge, Heading, Text, Card } from "../atoms/index.js";

/**
 * Molecule: FeatureCard
 * Carte présentant une fonctionnalité avec icône, titre et description
 */
export function FeatureCard({ icon, title, description, color, delay = 0 }) {
  return (
    <Card 
      hover 
      className="border border-blue-100 fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <Badge 
        variant="gradient" 
        className={`w-12 h-12 bg-gradient-to-br ${color} text-2xl mb-4`}
      >
        {icon}
      </Badge>
      <Heading level={3} className="text-blue-900 mb-2">
        {title}
      </Heading>
      <Text variant="primary" size="sm" className="leading-relaxed">
        {description}
      </Text>
    </Card>
  );
}

