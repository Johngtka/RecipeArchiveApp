import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5T4Component } from './p5-t4.component';

describe('P5T4Component', () => {
  let component: P5T4Component;
  let fixture: ComponentFixture<P5T4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P5T4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
