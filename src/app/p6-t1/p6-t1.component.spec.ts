import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6T1Component } from './p6-t1.component';

describe('P6T1Component', () => {
  let component: P6T1Component;
  let fixture: ComponentFixture<P6T1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P6T1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
