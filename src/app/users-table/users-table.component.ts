import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/services/http.service';
import {Observable} from 'rxjs';
import {IUser} from '../shared/interfaces/users.interfaces';
import {ITodo} from '../shared/interfaces/todos.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  users$: Observable<IUser[]> | undefined;
  todos$: Observable<ITodo[]> | undefined;
  showModal: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.users$ = this.httpService.getUsers();
  }


  openModalForUsersTodos() {
    this.todos$ = this.httpService.getTodosForUser();
    this.showModal = true;
  }

}
