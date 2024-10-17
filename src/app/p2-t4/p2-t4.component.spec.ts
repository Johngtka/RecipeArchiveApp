import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2T4Component } from './p2-t4.component';

describe('P2T4Component', () => {
  let component: P2T4Component;
  let fixture: ComponentFixture<P2T4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P2T4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
