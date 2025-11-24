import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  createTask(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAllTasks() {
    return this.taskRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
}
