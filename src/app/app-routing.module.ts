import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
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
    {
        path: 'product/P2T1',
        component: P2T1Component,
    },
    {
        path: 'product/P2T2',
        component: P2T2Component,
    },
    {
        path: 'product/P2T3',
        component: P2T3Component,
    },
    {
        path: 'product/P2T4',
        component: P2T4Component,
    },
    {
        path: 'product/P3T1',
        component: P3T1Component,
    },
    {
        path: 'product/P3T2',
        component: P3T2Component,
    },
    {
        path: 'product/P3T3',
        component: P3T3Component,
    },
    {
        path: 'product/P3T4',
        component: P3T4Component,
    },
    {
        path: 'product/P4T1',
        component: P4T1Component,
    },
    {
        path: 'product/P4T2',
        component: P4T2Component,
    },
    {
        path: 'product/P4T3',
        component: P4T3Component,
    },
    {
        path: 'product/P4T4',
        component: P4T4Component,
    },
    {
        path: 'product/P5T1',
        component: P5T1Component,
    },
    {
        path: 'product/P5T2',
        component: P5T2Component,
    },
    {
        path: 'product/P5T3',
        component: P5T3Component,
    },
    {
        path: 'product/P5T4',
        component: P5T4Component,
    },
    {
        path: 'product/P6T1',
        component: P6T1Component,
    },
    {
        path: 'product/P6T2',
        component: P6T2Component,
    },
    {
        path: 'product/P6T3',
        component: P6T3Component,
    },
    {
        path: 'product/P6T4',
        component: P6T4Component,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
