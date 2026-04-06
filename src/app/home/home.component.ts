import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
    answerForForm: string = 'CHUJ';
    riddlesForm!: FormGroup;
    mathTemplate = `
    $$\\frac{\\log(C^2 + \\sqrt{H}) \\times \\sin(U) + e^{J}}{\\cos(C) + H \\times \\sqrt{J}}$$
  `;
    formResponse!: any;
    formKeyByAnswer!: boolean;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.riddlesForm = new FormGroup({
            answer: new FormControl('', [Validators.required]),
        });

        if ((window as any).MathJax) {
            (window as any).MathJax.typesetPromise();
        }

        this.formResponse = this.riddlesForm.value;
    }

    ngAfterViewInit(): void {
        this.renderMath();
    }

    private renderMath() {
        if ((window as any).MathJax) {
            // setTimeout na 0ms lub 50ms wrzuca wykonanie na koniec kolejki zdarzeń,
            // dając pewność, że HTML z mathTemplate jest już w przeglądarce.
            setTimeout(() => {
                (window as any).MathJax.typesetPromise().catch((err: any) =>
                    console.error('MathJax error:', err),
                );
            }, 100);
        }
    }

    delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async checkAnswer(answerValue: any) {
        if (answerValue.answer === this.answerForForm) {
            this.formKeyByAnswer = true;

            await this.delay(2800);

            this.router.navigate(['/home/warning-after-hack']);

            this.formKeyByAnswer = false;
        } else {
            this.formKeyByAnswer = false;
        }
    }
    clearInput() {
        this.riddlesForm.get('answer')?.reset();
    }

    hasChange(): boolean | void {
        return (
            JSON.stringify(this.riddlesForm.value) !==
            JSON.stringify(this.formResponse)
        );
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyEvent(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.checkAnswer(this.riddlesForm.value);
        }
    }
}
