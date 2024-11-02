import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
  ],
  //templateUrl: './app.component.html',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-list-manager></app-list-manager>
    <!-- @if(userLoggedIn) {
    <h1>Welcome!</h1>
    <h2>You are logged in</h2>
    } @else {
    <h3>Please log in</h3>
    } -->
  `,

  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My To-Do List App';
  userLoggedIn = false;

  constructor() {
    //this.changeTitle('My First Angular App');
  }

  // changeTitle(newTitle: string) {
  //   console.log(newTitle);
  //   this.title = newTitle;
  // }
}
