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
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/');
}

const navigatorLang = navigator.language.split('-')[0];
const supportedLang = ['pl', 'en'];
const lang = supportedLang.includes(navigatorLang) ? navigatorLang : 'pl';
const materialModules = [
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
];

@NgModule({
    declarations: [AppComponent, HomeComponent],
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
