import { z } from "zod";
import { numberSchema } from "../schemas/numberSchema.js";

export async function fetchNumberAlea() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // Génère un nombre entre 1 et 50 comme spécifié dans le schéma
  const raw = { number: Math.floor(Math.random() * 50) + 1 };

  return numberSchema.parse(raw);
}

