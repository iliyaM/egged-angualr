import {NgModule} from '@angular/core';
import {UsersTableRoutingModule} from './users-table-routing.module';
import {UsersTableComponent} from './users-table.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: UsersTableComponent}
];

@NgModule({
  declarations: [
    UsersTableComponent
  ],
  imports: [
    SharedModule,
    UsersTableRoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersTableModule {
}
