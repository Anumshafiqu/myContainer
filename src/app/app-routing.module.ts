import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './container/network/page-1/page-1.component';
import { NetworkComponent } from './container/network/network.component';
import { JobsPageComponent } from './container/network/jobs-page/jobs-page.component';
import { MessagePageComponent } from './container/network/page-1/message-page/message-page.component';
import { NotificationPageComponent } from './container/network/page-1/notification-page/notification-page.component';
import { MePageComponent } from './container/network/page-1/me-page/me-page.component';

const routes: Routes = [
  {path : 'page-1' , component : Page1Component},
  {path : '' , component : Page1Component},
  {path:'network' , component:NetworkComponent},
  {path:'jobs-page' , component:JobsPageComponent},
  {path:'message-page' , component:MessagePageComponent},
  {path:'notification-page' , component:NotificationPageComponent},
  {path:'me-page' , component:MePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
