import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Demo {
  //  three patterns: return value, exception, side-effect (void)

  square(n: number): number {
    return n * n;
  }

  areaOfCircle(r: number) {
    if (r < 0) {
      throw new Error('Negative radius');
    }

    return Math.PI * r * r;
  }
}
