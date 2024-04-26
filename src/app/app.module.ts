import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkComponent } from './container/network/network.component';
import { Page1Component } from './container/network/page-1/page-1.component';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './container/network/jobs-page/jobs-page.component';
import { MessagePageComponent } from './container/network/page-1/message-page/message-page.component';
import { NotificationPageComponent } from './container/network/page-1/notification-page/notification-page.component';
import { MePageComponent } from './container/network/page-1/me-page/me-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PremuimPageComponent } from './premuim-page/premuim-page.component';
import { MyitemComponent } from './myitem/myitem.component';
import { MypostsPageComponent } from './myposts-page/myposts-page.component';
import { MentionsPageComponent } from './mentions-page/mentions-page.component';
import { NewjobsPageComponent } from './newjobs-page/newjobs-page.component';
// const Routes:Routes = [

//   {path: 'page-1' , component : Page1Component},
//   {path: 'network' , component : NetworkComponent},


// ]

@NgModule({
  declarations: [
     AppComponent,
    NetworkComponent,
    Page1Component,
    JobsPageComponent,
    MessagePageComponent,
    NotificationPageComponent,
    MePageComponent,
    PremuimPageComponent,
    MyitemComponent,
    MypostsPageComponent,
    MentionsPageComponent,
    NewjobsPageComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
