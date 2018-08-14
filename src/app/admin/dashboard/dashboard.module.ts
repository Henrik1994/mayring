import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
    { path: "", component:DashboardComponent}
]

@NgModule({
    imports:[ RouterModule.forChild(route),
                DashboardComponent
            ],
    exports:[]
})

export class DashboardModule {}