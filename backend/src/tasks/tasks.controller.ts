import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ApiTaskOperation } from './decorators/api-task-operation.decorator';
import { ResponseTaskDto } from './dto/response-task.dto';

@Controller('tasks')
@UseInterceptors(ClassSerializerInterceptor)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<ResponseTaskDto> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all tasks' })
  findAllTasks(): Promise<ResponseTaskDto[]> {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  @ApiTaskOperation({
    summary: 'Retrieve a task by ID',
    successDescription: 'The task has been successfully retrieved.',
    successStatus: HttpStatus.OK,
    responseType: ResponseTaskDto,
  })
  findTaskById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseTaskDto> {
    return this.tasksService.findTaskById(id);
  }

  @Patch(':id')
  @ApiTaskOperation({
    summary: 'Update a task by ID',
    successDescription: 'The task has been successfully updated.',
    successStatus: HttpStatus.OK,
    responseType: ResponseTaskDto,
  })
  updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<ResponseTaskDto> {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiTaskOperation({
    summary: 'Delete a task by ID',
    successDescription: 'The task has been successfully deleted.',
    successStatus: HttpStatus.NO_CONTENT,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  removeTask(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.tasksService.removeTask(id);
  }
}
