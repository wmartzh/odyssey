
import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
  confirmPassword: z.string().min(8).max(50),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;