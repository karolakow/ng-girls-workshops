import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  template: `
    <p>input-button-unit works!</p>
    The item title is: {{ title }}
  `,
  styleUrl: './input-button-unit.component.scss',
})
export class InputButtonUnitComponent {
  title = 'Learn about components';
}
