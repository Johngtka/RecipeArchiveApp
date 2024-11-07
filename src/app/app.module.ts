import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { P1T1Component } from './p1-t1/p1-t1.component';
import { P1T2Component } from './p1-t2/p1-t2.component';
import { P1T3Component } from './p1-t3/p1-t3.component';
import { P1T4Component } from './p1-t4/p1-t4.component';
import { P2T1Component } from './p2-t1/p2-t1.component';
import { P2T2Component } from './p2-t2/p2-t2.component';
import { P2T3Component } from './p2-t3/p2-t3.component';
import { P2T4Component } from './p2-t4/p2-t4.component';
import { P3T1Component } from './p3-t1/p3-t1.component';
import { P3T2Component } from './p3-t2/p3-t2.component';
import { P3T3Component } from './p3-t3/p3-t3.component';
import { P3T4Component } from './p3-t4/p3-t4.component';
import { P4T1Component } from './p4-t1/p4-t1.component';
import { P4T2Component } from './p4-t2/p4-t2.component';
import { P4T3Component } from './p4-t3/p4-t3.component';
import { P4T4Component } from './p4-t4/p4-t4.component';
import { P5T1Component } from './p5-t1/p5-t1.component';
import { P5T2Component } from './p5-t2/p5-t2.component';
import { P5T3Component } from './p5-t3/p5-t3.component';
import { P5T4Component } from './p5-t4/p5-t4.component';
import { P6T1Component } from './p6-t1/p6-t1.component';
import { P6T2Component } from './p6-t2/p6-t2.component';
import { P6T3Component } from './p6-t3/p6-t3.component';
import { P6T4Component } from './p6-t4/p6-t4.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/');
}

const navigatorLang = navigator.language.split('-')[0];
const supportedLang = ['pl', 'en'];
const lang = supportedLang.includes(navigatorLang) ? navigatorLang : 'pl';
const Recipes = [
    P1T1Component,
    P1T2Component,
    P1T3Component,
    P1T4Component,
    P2T1Component,
    P2T2Component,
    P2T3Component,
    P2T4Component,
    P3T1Component,
    P3T2Component,
    P3T3Component,
    P3T4Component,
    P4T1Component,
    P4T2Component,
    P4T3Component,
    P4T4Component,
    P5T1Component,
    P5T2Component,
    P5T3Component,
    P5T4Component,
    P6T1Component,
    P6T2Component,
    P6T3Component,
    P6T4Component,
];
const materialModules = [
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
];

@NgModule({
    declarations: [AppComponent, HomeComponent, ...Recipes],
    imports: [
        LayoutModule,
        BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            defaultLanguage: lang,
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        ...materialModules,
        ReactiveFormsModule,
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
