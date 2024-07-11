import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveDesignRoutingModule } from './responsive-design-routing.module';
import { ResponsiveDesignComponent } from './responsive-design.component';


@NgModule({
  declarations: [
    ResponsiveDesignComponent
  ],
  imports: [
    CommonModule,
    ResponsiveDesignRoutingModule
  ]
})
export class ResponsiveDesignModule { }
