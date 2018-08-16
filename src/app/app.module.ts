import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app.routing';
import { AdminRouter } from './admin/admin-routing.module';
import { DirectivesDirective } from './directives.directive';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DirectivesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRouter ,
   
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
