import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path:'menu', loadChildren: './menu/menu.module#MenuModule' }
]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AdminRouter {} 