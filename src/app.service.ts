import { Injectable } from '@nestjs/common';
import { Todo } from './enum/todo.class';
import { v4 as uuidv4 } from 'uuid'; // Libreria per generare UUID
import { TodoCompletedEnum } from './enum/todocomplete.enum'; 

@Injectable()
export class AppService {
  private tasks = [];

  // Ritorna tutti i task attivi
  getAllTasks(): Todo[] {
    return this.tasks.filter(
      (task: Todo) => task.completed == TodoCompletedEnum.NT,
    );
  }

  // Crea il task aggiungendo all'array tutto
  createTask(todo): Todo {
    const task: Todo = {
      id: uuidv4(),
      description: todo.description,
      completed: TodoCompletedEnum.NT,
    };
    this.tasks.push(task);
    return task;
  }

  // Aggiorna task 
  updateTask(id: string, todo): Todo {
    let upTodo: any = {};
    this.tasks = this.tasks.map((task: Todo) => {
      if(task.id == id) {
        task.description = todo.description;
        upTodo  = { ...task };
      }  
      return task;
    });
  
    return upTodo;
  }

  // "Cancella" il task
  deleteTask(id: string) {
    this.tasks.filter((todo: Todo) => {
      if (todo.id == id) {
       todo.completed = TodoCompletedEnum.E;
       return todo; 
      }
    });
    return true;
  }
}
