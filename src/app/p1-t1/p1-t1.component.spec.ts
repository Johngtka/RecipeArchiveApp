import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1T1Component } from './p1-t1.component';

describe('P1T1Component', () => {
    let component: P1T1Component;
    let fixture: ComponentFixture<P1T1Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P1T1Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P1T1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
