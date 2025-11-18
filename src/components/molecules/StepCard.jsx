import { Badge, Heading, Text, Card } from "../atoms/index.js";

/**
 * Molecule: StepCard
 * Carte présentant une étape numérotée du processus
 */
export function StepCard({ step, title, description }) {
  return (
    <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <Badge 
        shape="circle" 
        className="w-10 h-10 bg-blue-500 text-white text-lg mb-4"
      >
        {step}
      </Badge>
      <Heading level={3} className="text-blue-900 mb-2">
        {title}
      </Heading>
      <Text variant="primary" size="sm">
        {description}
      </Text>
    </Card>
  );
}

