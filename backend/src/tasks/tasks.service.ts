import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ResponseTaskDto } from './dto/response-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  createTask(createTaskDto: CreateTaskDto): Promise<ResponseTaskDto> {
    const task: Task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAllTasks(): Promise<ResponseTaskDto[]> {
    return this.taskRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findTaskById(id: string): Promise<ResponseTaskDto> {
    const task: Task | null = await this.taskRepository.findOneBy({ id });

    if (!task) throw new NotFoundException(`Task with ID ${id} not found.`);

    return task;
  }

  async updateTask(
    id: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<ResponseTaskDto> {
    const task: Task = await this.findTaskById(id);

    this.taskRepository.merge(task, updateTaskDto);
    return this.taskRepository.save(task);
  }

  async removeTask(id: string): Promise<void> {
    const task: Task = await this.findTaskById(id);
    await this.taskRepository.remove(task);
  }
}
