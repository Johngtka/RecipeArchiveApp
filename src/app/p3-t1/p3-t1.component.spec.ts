import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3T1Component } from './p3-t1.component';

describe('P3T1Component', () => {
    let component: P3T1Component;
    let fixture: ComponentFixture<P3T1Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P3T1Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P3T1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
