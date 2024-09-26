import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, CounterComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-parent></app-parent>
    <app-counter></app-counter>
  `,
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'myApp';
}
