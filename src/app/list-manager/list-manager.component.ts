import { Component } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [TodoItemComponent, InputButtonUnitComponent],
  template: `
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul>
      @for (todoItem of todoList; track todoItem.title) {
      <li>
        <app-todo-item [item]="todoItem" />
      </li>
      }
    </ul>
  `,
  styleUrl: './list-manager.component.scss',
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
