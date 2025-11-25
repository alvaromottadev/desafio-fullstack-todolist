import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {
  let tasksController: TasksController;
  const mockTasksService = {
    createTask: jest.fn(),
    findAllTasks: jest.fn(),
    findTaskById: jest.fn(),
    updateTask: jest.fn(),
    removeTask: jest.fn(),
  };
  let createTaskDto: CreateTaskDto;
  let createdTask: Task;
  let updateTaskDto: UpdateTaskDto;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    tasksController = new TasksController(mockTasksService as any);
    createTaskDto = {
      title: 'Test Task',
      description: 'This is a test task',
    };
    createdTask = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      ...createTaskDto,
      isDone: false,
      dueDate: undefined,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    updateTaskDto = {
      title: 'Updated Task Title',
      description: 'This is an updated test task',
      isDone: true,
    };
  });

  it('should use TasksService to create a task', async () => {
    jest.spyOn(mockTasksService, 'createTask').mockResolvedValue(createdTask);

    const result = await tasksController.createTask(createTaskDto);

    expect(mockTasksService.createTask).toHaveBeenCalledWith(createTaskDto);
    expect(result).toBe(createdTask);
  });

  it('should use TasksService to find all tasks', async () => {
    const tasksArray = [createdTask];

    jest.spyOn(mockTasksService, 'findAllTasks').mockResolvedValue(tasksArray);

    const result = await tasksController.findAllTasks();

    expect(mockTasksService.findAllTasks).toHaveBeenCalled();
    expect(result).toBe(tasksArray);
  });

  it('should use TasksService to find a task by ID', async () => {
    jest.spyOn(mockTasksService, 'findTaskById').mockResolvedValue(createdTask);

    const result = await tasksController.findTaskById(createdTask.id);

    expect(mockTasksService.findTaskById).toHaveBeenCalledWith(createdTask.id);
    expect(result).toBe(createdTask);
  });

  it('should use TasksService to update a task', async () => {
    const updatedTask = { ...createdTask, ...updateTaskDto };
    jest.spyOn(mockTasksService, 'updateTask').mockResolvedValue(updatedTask);

    const result = await tasksController.updateTask(
      createdTask.id,
      updateTaskDto,
    );

    expect(mockTasksService.updateTask).toHaveBeenCalledWith(
      createdTask.id,
      updateTaskDto,
    );
    expect(result).toBe(updatedTask);
  });

  it('should use TasksService to remove a task', async () => {
    jest.spyOn(mockTasksService, 'removeTask').mockResolvedValue(undefined);

    const result = await tasksController.removeTask(createdTask.id);

    expect(mockTasksService.removeTask).toHaveBeenCalledWith(createdTask.id);
    expect(result).toBeUndefined();
  });
});
