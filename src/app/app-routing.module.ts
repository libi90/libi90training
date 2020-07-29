import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Array1Component } from './array1/array1.component';
import { SimplecalcComponent } from './simplecalc/simplecalc.component';
import { ProductentryComponent } from './productentry/productentry.component';


const routes: Routes = [{path:"home",component:Array1Component},
                         {path:"test",component:SimplecalcComponent},
                         {path:"pdetails",component:ProductentryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
