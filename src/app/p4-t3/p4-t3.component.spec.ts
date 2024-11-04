import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4T3Component } from './p4-t3.component';

describe('P4T3Component', () => {
  let component: P4T3Component;
  let fixture: ComponentFixture<P4T3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P4T3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
