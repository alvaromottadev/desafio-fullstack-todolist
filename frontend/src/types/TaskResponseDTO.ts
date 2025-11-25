export type TaskResponseDTO = {
  id: string;

  title: string;

  description: string;

  isDone: boolean;

  dueDate?: Date;

  createdAt: Date;

  updatedAt: Date;
};
