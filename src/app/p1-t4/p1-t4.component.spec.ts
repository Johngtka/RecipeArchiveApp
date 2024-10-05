import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1T4Component } from './p1-t4.component';

describe('P1T4Component', () => {
    let component: P1T4Component;
    let fixture: ComponentFixture<P1T4Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P1T4Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P1T4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
