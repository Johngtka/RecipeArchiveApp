import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5T3Component } from './p5-t3.component';

describe('P5T3Component', () => {
  let component: P5T3Component;
  let fixture: ComponentFixture<P5T3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P5T3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
