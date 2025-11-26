import { z } from "zod";

export const UpdateTaskSchema = z.object({
  title: z.string().min(1, "Título é obrigatório").optional(),
  description: z.string().min(1, "Descrição é obrigatória").optional(),
  dueDate: z.date().optional(),
  isDone: z.boolean().optional(),
});
