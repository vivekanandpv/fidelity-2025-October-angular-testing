import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample } from './sample';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Sample', () => {
  let component: Sample;
  let fixture: ComponentFixture<Sample>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [Sample],
    }).compileComponents();

    fixture = TestBed.createComponent(Sample);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial counter of 0', () => {
    const display = nativeElement.querySelector('[data-testid="count-display"]');
    expect(display?.textContent).toEqual('Count: 0');
  });

  it('should increment the count when the button is clicked', () => {
    const button = nativeElement.querySelector<HTMLButtonElement>(
      '[data-testid="increment-button"]'
    );

    button?.click();

    fixture.detectChanges();

    const display = nativeElement.querySelector('[data-testid="count-display"]');
    expect(display?.textContent).toEqual('Count: 1');
  });

  it('should decrement the count when the button is clicked', () => {
    const button = nativeElement.querySelector<HTMLButtonElement>(
      '[data-testid="decrement-button"]'
    );

    button?.click();

    fixture.detectChanges();

    const display = nativeElement.querySelector('[data-testid="count-display"]');
    expect(display?.textContent).toEqual('Count: -1');
  });
});
