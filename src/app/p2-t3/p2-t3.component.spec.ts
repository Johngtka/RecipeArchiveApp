import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2T3Component } from './p2-t3.component';

describe('P2T3Component', () => {
  let component: P2T3Component;
  let fixture: ComponentFixture<P2T3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P2T3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
