import { z } from "zod";

export const numberSchema = z.object({
  number: z.number().min(1).max(50),
});

export const inputNumberSchema = z.object({
  number: z
    .string()
    .min(1, "Le nombre est requis")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Le nombre doit être un entier positif"
    )
    .transform((val) => Number(val)),
});

