import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4T2Component } from './p4-t2.component';

describe('P4T2Component', () => {
  let component: P4T2Component;
  let fixture: ComponentFixture<P4T2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P4T2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
