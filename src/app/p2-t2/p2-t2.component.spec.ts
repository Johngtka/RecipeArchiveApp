import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2T2Component } from './p2-t2.component';

describe('P2T2Component', () => {
  let component: P2T2Component;
  let fixture: ComponentFixture<P2T2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P2T2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
