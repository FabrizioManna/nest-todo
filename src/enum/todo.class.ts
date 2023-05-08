import { TodoCompletedEnum } from './todocomplete.enum';
export class Todo {
  id: string;
  description: string;
  completed: TodoCompletedEnum;
}