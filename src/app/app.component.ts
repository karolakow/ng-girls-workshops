import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItem } from './interfaces/todo-item';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputButtonUnitComponent, TodoItemComponent],
  //templateUrl: './app.component.html',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-input-button-unit></app-input-button-unit>
    <ul>
      @for (todoItem of todoList; track todoItem.title) {
      <li>
        <app-todo-item [item]="todoItem" />
      </li>
      }
    </ul>
    @if(userLoggedIn) {
    <h1>Welcome!</h1>
    <h2>You are logged in</h2>
    } @else {
    <h3>Please log in</h3>
    }
  `,

  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  userLoggedIn = false;

  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() {
    this.changeTitle('My First Angular App');
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }
}
