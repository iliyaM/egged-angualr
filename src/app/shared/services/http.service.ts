import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, Observable, startWith, switchMap} from 'rxjs';
import {IUser} from '../interfaces/users.interfaces';
import {environment} from '../../../environments/environment';
import {ITodo} from '../interfaces/todos.interface';
import {ICurrencyExchangeRate} from '../interfaces/exchange-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.baseUrl}/users`);
  };

  getTodosForUser(userId?: string): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${environment.baseUrl}/todos${userId ? `?userId=${userId}` : ''}`);
  }

  getExchangeRatePolling(): Observable<ICurrencyExchangeRate> {
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => this.http.get<ICurrencyExchangeRate>(environment.currencyURL))
    );
  }
}
