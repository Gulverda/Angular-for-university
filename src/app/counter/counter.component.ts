import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <div class="counter-container">
      <h1 [ngStyle]="{'color': getColor(count)}">{{ count }}</h1>
      <button (click)="decrement()">-</button>
      <button (click)="increment()">+</button>
    </div>
  `,
  styleUrls: ['../counter/counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  getColor(value: number): string {
    if (value < 0) {
      return 'red';
    } else if (value > 0) {
      return 'green';
    }
    return 'black'; // For count === 0
  }
}
