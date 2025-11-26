import { z } from "zod";
export const CreateTaskSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  dueDate: z.date().optional(),
});
