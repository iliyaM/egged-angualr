import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModalService} from '../services/modal.service';

@Injectable()
export class CustomHeaderInterceptor implements HttpInterceptor {

  constructor(private modalService: ModalService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const randomNum = Math.floor(Math.random() * 20) + 1;

    if (randomNum > 15) {
      this.handleErrorAndShowModal(`Random number is: ${randomNum}`);
      throw new HttpErrorResponse({error: `Random number is: ${randomNum}`, status: 500});
    }

    if (!req.url.startsWith('https://www.alphavantage.co/query')) {
      console.log(`Random number is: ${randomNum}`);
      const modifiedReq = req.clone({
        setHeaders: {
          'X-Custom-Header': `ID: ${randomNum}`
        }
      });
      return next.handle(modifiedReq);
    } else {
      return next.handle(req);
    }

  }

  private handleErrorAndShowModal(errorMessage: string) {
    console.error(`💀 Random number is above 15 - ${errorMessage}`);
    this.modalService.modalConfigs$.next({
      show: true,
      title: 'Random number is above 15',
      content: errorMessage
    });
  }
}
