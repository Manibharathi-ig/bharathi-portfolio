import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email"),

  projectType: z
    .string()
    .min(1, "Project type is required"),

  opportunityType: z
    .string()
    .min(1, "Opportunity type is required"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});