import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  findTaskById(@Param('id', ParseUUIDPipe) id: string) {
    return this.tasksService.findTaskById(id);
  }
}
