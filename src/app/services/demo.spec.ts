import { TestBed } from '@angular/core/testing';

import { Demo } from './demo';
import { provideZonelessChangeDetection } from '@angular/core';

//  Test suite (optional, but recommended)
describe('Demo', () => {
  let service: Demo;

  //  life cycle method
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(Demo);
  });

  //  test-case or test method
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should square a number', () => {
    expect(service.square(7)).toEqual(49);
  });

  it('should throw error on negative radius', () => {
    expect(() => service.areaOfCircle(-9)).toThrowError('Negative radius');
  });

  it('should return the area of a unit circle', () => {
    expect(service.areaOfCircle(1)).toBeCloseTo(3.1415, 3);
  });
});
