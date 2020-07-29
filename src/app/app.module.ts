import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SimplecalcComponent } from './simplecalc/simplecalc.component';
import { Array1Component } from './array1/array1.component';
import { DataComponent } from './data/data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from'@angular/forms';
import { ProductentryComponent } from './productentry/productentry.component';

  

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SimplecalcComponent,
    Array1Component,
    DataComponent,
    ProductentryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
