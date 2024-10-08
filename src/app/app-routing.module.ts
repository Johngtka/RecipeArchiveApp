import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { P1T1Component } from './p1-t1/p1-t1.component';
import { P1T2Component } from './p1-t2/p1-t2.component';
import { P1T3Component } from './p1-t3/p1-t3.component';
import { P1T4Component } from './p1-t4/p1-t4.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'product/P1T1',
        component: P1T1Component,
    },
    {
        path: 'product/P1T2',
        component: P1T2Component,
    },
    {
        path: 'product/P1T3',
        component: P1T3Component,
    },
    {
        path: 'product/P1T4',
        component: P1T4Component,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
