import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1T3Component } from './p1-t3.component';

describe('P1T3Component', () => {
    let component: P1T3Component;
    let fixture: ComponentFixture<P1T3Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P1T3Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P1T3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
