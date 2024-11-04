import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4T1Component } from './p4-t1.component';

describe('P4T1Component', () => {
  let component: P4T1Component;
  let fixture: ComponentFixture<P4T1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P4T1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
