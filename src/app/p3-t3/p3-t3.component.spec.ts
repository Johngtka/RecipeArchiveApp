import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3T3Component } from './p3-t3.component';

describe('P3T3Component', () => {
    let component: P3T3Component;
    let fixture: ComponentFixture<P3T3Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [P3T3Component],
        }).compileComponents();

        fixture = TestBed.createComponent(P3T3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
