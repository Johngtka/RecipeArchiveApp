import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5T2Component } from './p5-t2.component';

describe('P5T2Component', () => {
  let component: P5T2Component;
  let fixture: ComponentFixture<P5T2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P5T2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
