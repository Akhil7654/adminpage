import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedetailComponent } from './feedetail/feedetail.component';
import { HomeComponent } from './home/home.component';
import { RoutedetailComponent } from './routedetail/routedetail.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'route',component:RoutedetailComponent},
  {path:'fee',component:FeedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
