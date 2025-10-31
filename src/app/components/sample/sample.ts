import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.scss',
})
export class Sample {
  count = signal(0);

  increment() {
    this.count.update((v) => v + 1);
  }

  decrement() {
    this.count.update((v) => v - 1);
  }
}
