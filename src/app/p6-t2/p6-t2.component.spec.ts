import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6T2Component } from './p6-t2.component';

describe('P6T2Component', () => {
  let component: P6T2Component;
  let fixture: ComponentFixture<P6T2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P6T2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
