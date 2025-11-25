import { Repository } from 'typeorm';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';

/* eslint-disable @typescript-eslint/unbound-method */
describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: jest.Mocked<Repository<Task>>;

  let createTaskDto: CreateTaskDto;
  let updateTaskDto: UpdateTaskDto;
  let createdTask: Task;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOneBy: jest.fn(),
            merge: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    tasksRepository = module.get<jest.Mocked<Repository<Task>>>(
      getRepositoryToken(Task),
    );
    createTaskDto = {
      title: 'Test Task',
      description: 'This is a test task',
    };
    updateTaskDto = {
      title: 'Updated Task Title',
      description: 'This is an updated test task',
      isDone: true,
    };
    createdTask = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      ...createTaskDto,
      isDone: false,
      dueDate: undefined,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      tasksRepository.create.mockReturnValue(createdTask);
      tasksRepository.save.mockResolvedValue(createdTask);

      const result = await tasksService.createTask(createTaskDto);

      expect(tasksRepository.create).toHaveBeenCalledWith(createTaskDto);
      expect(tasksRepository.save).toHaveBeenCalledWith(createdTask);
      expect(result).toEqual(createdTask);
    });
  });

  describe('findAllTasks', () => {
    it('should find all tasks', async () => {
      const tasks: Task[] = [
        {
          id: '123e4567-e89b-12d3-a456-426614174000',
          title: 'Test Task',
          description: 'This is a test task',
          isDone: false,
          dueDate: undefined,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: '123e4567-e89b-12d3-a456-426614174001',
          title: 'Test Task 2',
          description: 'This is a test task 2',
          isDone: false,
          dueDate: undefined,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ];

      tasksRepository.find.mockResolvedValue(tasks);

      const result = await tasksService.findAllTasks();

      expect(tasksRepository.find).toHaveBeenCalled();
      expect(result).toEqual(tasks);
    });
  });

  describe('fildTaskById', () => {
    it('should find task by id with success', async () => {
      tasksRepository.findOneBy.mockResolvedValue(createdTask);

      const result = await tasksService.findTaskById(createdTask.id);

      expect(tasksRepository.findOneBy).toHaveBeenCalledWith({
        id: createdTask.id,
      });
      expect(result).toEqual(createdTask);
    });
    it('should throw an error when task not found by id', async () => {
      await expect(
        tasksService.findTaskById('non-existing-id'),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateTask', () => {
    it('should update task with success', async () => {
      jest.spyOn(tasksService, 'findTaskById').mockResolvedValue(createdTask);

      const updatedTask = {
        ...createdTask,
        ...updateTaskDto,
        dueDate: undefined,
      };

      tasksRepository.merge.mockReturnValue(updatedTask);
      tasksRepository.save.mockResolvedValue(updatedTask);

      const result = await tasksService.updateTask(
        createdTask.id,
        updateTaskDto,
      );

      expect(tasksService.findTaskById).toHaveBeenCalledWith(createdTask.id);
      expect(tasksRepository.merge).toHaveBeenCalledWith(
        createdTask,
        updateTaskDto,
      );
      expect(tasksRepository.save).toHaveBeenCalledWith(createdTask);
      expect(result).toEqual(updatedTask);
    });
  });

  describe('removeTask', () => {
    it('should remove task with sucess', async () => {
      jest.spyOn(tasksService, 'findTaskById').mockResolvedValue(createdTask);

      tasksRepository.remove.mockResolvedValue(createdTask);

      await tasksService.removeTask(createdTask.id);

      expect(tasksService.findTaskById).toHaveBeenCalledWith(createdTask.id);
      expect(tasksRepository.remove).toHaveBeenCalledWith(createdTask);
    });
  });
});
