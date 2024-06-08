import { z } from 'zod';

// Define the schema for validating personal account data
export const personalAccountSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().email(),
    image: z.string().nullable(),
    updatedAt: z.string(),
});

// Define the schema for validating personal account update data
export const personalAccountUpdateSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().email(),
});



// Infer the TypeScript type from the schemas
export type PersonalAccountDTO = z.infer<typeof personalAccountSchema>;
export type PersonalAccountUpdateDTO = z.infer<typeof personalAccountUpdateSchema>;
