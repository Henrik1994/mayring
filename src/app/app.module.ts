import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app.routing';
import { AdminRouter } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRouter 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
