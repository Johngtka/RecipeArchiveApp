import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2T1Component } from './p2-t1.component';

describe('P2T1Component', () => {
  let component: P2T1Component;
  let fixture: ComponentFixture<P2T1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P2T1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
