import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6T4Component } from './p6-t4.component';

describe('P6T4Component', () => {
  let component: P6T4Component;
  let fixture: ComponentFixture<P6T4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P6T4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
