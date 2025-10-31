import { TestBed } from '@angular/core/testing';

import { Demo } from './demo';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Demo', () => {
  let service: Demo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(Demo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
