import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveDesignComponent } from './responsive-design.component';

const routes: Routes = [{ path: '', component: ResponsiveDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveDesignRoutingModule { }
