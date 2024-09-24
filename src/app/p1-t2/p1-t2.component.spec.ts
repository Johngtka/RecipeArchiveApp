import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1T2Component } from './p1-t2.component';

describe('P1T2Component', () => {
    let component: P1T2Component;
    let fixture: ComponentFixture<P1T2Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P1T2Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P1T2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
