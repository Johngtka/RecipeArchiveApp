import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAfterHackComponent } from './warning-after-hack.component';

describe('WarningAfterHackComponent', () => {
    let component: WarningAfterHackComponent;
    let fixture: ComponentFixture<WarningAfterHackComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WarningAfterHackComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WarningAfterHackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
