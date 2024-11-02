import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent],
  template: `<div class="todo-item">
    <!-- <input
      type="checkbox"
      class="todo-checkbox"
      (click)="completeItem()"
      [checked]="item.completed"
    />
    <span class="todo-title" [ngClass]="{ 'todo-complete': item.completed }">
      {{ item.title }}
    </span>
    <button class="btn btn-red" (click)="removeItem()">remove</button> -->
    @if(isEditable){
    <app-input-button-unit
      [title]="item.title"
      (submit)="confirmNewItem($event)"
    ></app-input-button-unit>
    } @else {
    <input
      type="checkbox"
      class="todo-checkbox"
      (click)="completeItem()"
      [checked]="item.completed"
    />
    <span class="todo-title" [ngClass]="{ 'todo-complete': item.completed }">
      {{ item.title }}
    </span>
    <button class="btn" (click)="editItem()">Edit</button>
    <button class="btn btn-red" (click)="removeItem()">remove</button>
    }
  </div>`,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  protected isEditable = false;

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }

  editItem() {
    this.isEditable = !this.isEditable;
  }

  confirmNewItem(itemTitle: string) {
    this.edit.emit({
      item: this.item,
      newTitle: itemTitle,
    });
    this.isEditable = !this.isEditable;
  }
}
