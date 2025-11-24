/*

This DTO represents the structure of a task response.
Fields is equal to the Task entity, ensuring consistency in data representation.
But it is separated to allow for future modifications without affecting the entity directly.

*/
export class ResponseTaskDto {
  id: string;

  title: string;

  description: string;

  isDone: boolean;

  dueDate?: Date;

  createdAt: Date;

  updatedAt: Date;
}
