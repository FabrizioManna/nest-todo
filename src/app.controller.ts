import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './enum/todo.class';
import { TodoDto } from './dto/todo.dto';

@Controller('/todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTasks(): Todo[] {
    return this.appService.getAllTasks();
  }

  @Post()
  createTask(@Body() todo: TodoDto) {
    return this.appService.createTask(todo);
  }

  @Put(':id')
  updateTask(@Param('id') id, @Body() todoDto: TodoDto) {
    return this.appService.updateTask(id, todoDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): boolean {
      return this.appService.deleteTask(id);
  }
}
