import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="todo-item">
    <input
      type="checkbox"
      class="todo-checkbox"
      (click)="completeItem()"
      [checked]="item.completed"
    />
    <span class="todo-title" [ngClass]="{ 'todo-complete': item.completed }">
      {{ item.title }}
    </span>
    <button class="btn btn-red" (click)="removeItem()">remove</button>
  </div>`,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
