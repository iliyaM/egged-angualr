import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {HttpService} from './services/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ModalComponent} from './modal/modal.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomHeaderInterceptor} from './interceptors/custom-header.interceptor';
import {GenericModalMessageComponent} from './generic-modal-message/generic-modal-message.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ModalComponent,
    TodoListComponent,
    GenericModalMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHeaderInterceptor, multi: true },
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    SidebarComponent,
    ModalComponent,
    TodoListComponent,
    ReactiveFormsModule,
    GenericModalMessageComponent
  ],
})
export class SharedModule { }
