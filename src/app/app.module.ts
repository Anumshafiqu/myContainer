import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkComponent } from './container/network/network.component';
import { Page1Component } from './container/network/page-1/page-1.component';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './container/network/jobs-page/jobs-page.component';
import { MessagePageComponent } from './container/network/page-1/message-page/message-page.component';


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
    MessagePageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
