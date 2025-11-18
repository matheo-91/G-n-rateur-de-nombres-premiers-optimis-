import { Input, Label, ErrorText, Button } from "../atoms/index.js";

/**
 * Molecule: NumberInputForm
 * Formulaire pour saisir et valider un nombre
 */
export function NumberInputForm({ 
  value, 
  onChange, 
  onSubmit, 
  error, 
  onErrorChange 
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
    if (onErrorChange) {
      onErrorChange("");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="number-input">
          Entrez un nombre entier positif
        </Label>
        <Input
          id="number-input"
          type="text"
          value={value}
          onChange={handleChange}
          error={!!error}
          placeholder="Ex: 17, 23, 100..."
        />
        <ErrorText>{error}</ErrorText>
      </div>
      <Button type="submit" variant="primary">
        Vérifier
      </Button>
    </form>
  );
}

