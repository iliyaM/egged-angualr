import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealTimeCurrencyComponent } from './real-time-currency.component';

const routes: Routes = [{ path: '', component: RealTimeCurrencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealTimeCurrencyRoutingModule { }
