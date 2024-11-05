import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5T1Component } from './p5-t1.component';

describe('P5T1Component', () => {
  let component: P5T1Component;
  let fixture: ComponentFixture<P5T1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P5T1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
