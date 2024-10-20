import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3T4Component } from './p3-t4.component';

describe('P3T4Component', () => {
    let component: P3T4Component;
    let fixture: ComponentFixture<P3T4Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P3T4Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P3T4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
