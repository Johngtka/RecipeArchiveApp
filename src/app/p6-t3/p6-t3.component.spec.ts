import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6T3Component } from './p6-t3.component';

describe('P6T3Component', () => {
  let component: P6T3Component;
  let fixture: ComponentFixture<P6T3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P6T3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
