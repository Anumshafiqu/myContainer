import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './container/network/page-1/page-1.component';
import { NetworkComponent } from './container/network/network.component';

const routes: Routes = [
  {path : 'page-1' , component : Page1Component},
  {path : '' , component : Page1Component},
  {path:'network' , component:NetworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
