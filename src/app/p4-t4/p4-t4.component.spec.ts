import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4T4Component } from './p4-t4.component';

describe('P4T4Component', () => {
  let component: P4T4Component;
  let fixture: ComponentFixture<P4T4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P4T4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
