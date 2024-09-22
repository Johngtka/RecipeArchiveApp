import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
    productBuffer!: any;
    ngOnInit(): void {
        this.set();
        this.get();
    }

    set() {
        localStorage.setItem('ProductKey', 'P1T1');
    }
    get() {
        const storedValue = localStorage.getItem('ProductKey');

        if (storedValue) {
            this.productBuffer = storedValue.valueOf();
            console.log(`Value found: ${this.productBuffer}`);
        } else {
            console.log('No value found for myKey');
        }
    }
}
