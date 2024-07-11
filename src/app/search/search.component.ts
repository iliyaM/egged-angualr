import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {catchError, debounceTime, distinctUntilChanged, Observable, of, startWith, switchMap} from 'rxjs';
import {HttpService} from '../shared/services/http.service';
import {ITodo} from '../shared/interfaces/todos.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  todosPerUser$: Observable<ITodo[]> | undefined;
  userIdInput: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$')
  ]);


  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.todosPerUser$ = this.userIdInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(userId => {
        if (this.userIdInput.valid) {
          return this.httpService.getTodosForUser(userId).pipe(
            catchError(() => of([])));
        } else {
          return of([]);
        }
      }),
      startWith([])
    );
  }

}
