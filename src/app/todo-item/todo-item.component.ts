import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `<div class="todo-item">
    {{ item.title }}
    <button class="btn btn-red" (click)="removeItem()">remove</button>
  </div>`,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  removeItem() {
    this.remove.emit(this.item);
  }
}
