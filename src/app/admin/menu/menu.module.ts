import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const route: Routes = [
    { path: "",
      component: MenuComponent
    
    }
]

@NgModule({
    imports:[ RouterModule.forChild(route),
        MenuComponent
            ],
    exports:[]
})

export class MenuModule {}