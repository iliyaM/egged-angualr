import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITodo} from '../interfaces/todos.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todosList$: Observable<ITodo[]> | undefined;

  constructor() {
  }
}
