import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealTimeCurrencyRoutingModule } from './real-time-currency-routing.module';
import { RealTimeCurrencyComponent } from './real-time-currency.component';


@NgModule({
  declarations: [
    RealTimeCurrencyComponent
  ],
  imports: [
    CommonModule,
    RealTimeCurrencyRoutingModule
  ]
})
export class RealTimeCurrencyModule { }
