import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RoutedetailComponent } from './routedetail/routedetail.component';
import { FeedetailComponent } from './feedetail/feedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RoutedetailComponent,
    FeedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
