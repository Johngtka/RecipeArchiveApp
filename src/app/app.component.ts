import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    constructor(private observer: BreakpointObserver) {}

    dateObject = new Date();
    fullDateValue!: string;
    dayScopeValue!: string | number;
    monthScopeValue!: string | number;
    isMobileDetected = false;

    ngOnInit(): void {
        let day = this.dateObject.getDate();
        let month = this.dateObject.getMonth() + 1;
        let year = this.dateObject.getFullYear();

        this.dayScopeValue = day < 10 ? '0' + day : day;
        this.monthScopeValue = month < 10 ? '0' + month : month;
        this.fullDateValue = `${this.dayScopeValue}.${this.monthScopeValue}.${year}`;

        this.observer.observe(['(max-width: 610px)']).subscribe((isMobile) => {
            if (isMobile.matches) {
                this.isMobileDetected = true;
            } else {
                this.isMobileDetected = false;
            }
        });
    }
}
