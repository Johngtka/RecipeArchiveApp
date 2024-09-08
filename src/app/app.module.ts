import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatToolbarModule } from '@angular/material/toolbar';
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
const materialModules = [MatToolbarModule, MatProgressSpinnerModule];

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
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
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
