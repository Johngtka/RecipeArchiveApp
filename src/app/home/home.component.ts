import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
    riddlesForm!: FormGroup;
    mathTemplate = `
    $$\\frac{\\log(C^2 + \\sqrt{H}) \\times \\sin(U) + e^{J}}{\\cos(C) + H \\times \\sqrt{J}}$$
  `;

    ngOnInit(): void {
        this.riddlesForm = new FormGroup({
            answer: new FormControl('', [Validators.required]),
        });

        if ((window as any).MathJax) {
            (window as any).MathJax.typesetPromise();
        }
    }
}
