import { Component, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `<div class="todo-item">{{ item.title }}</div>`,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() item: TodoItem;
}
