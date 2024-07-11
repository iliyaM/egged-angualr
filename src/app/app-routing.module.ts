import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users-table',
    loadChildren: () => import('./users-table/users-table.module').then(m => m.UsersTableModule)
  },
  {path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  {
    path: 'real-time-currency',
    loadChildren: () => import('./real-time-currency/real-time-currency.module').then(m => m.RealTimeCurrencyModule)
  }, {
    path: 'responsive-design',
    loadChildren: () => import('./responsive-design/responsive-design.module').then(m => m.ResponsiveDesignModule)
  },
  {path: '', redirectTo: '/users-table', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
