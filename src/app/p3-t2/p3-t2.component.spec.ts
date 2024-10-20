import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3T2Component } from './p3-t2.component';

describe('P3T2Component', () => {
    let component: P3T2Component;
    let fixture: ComponentFixture<P3T2Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P3T2Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P3T2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
