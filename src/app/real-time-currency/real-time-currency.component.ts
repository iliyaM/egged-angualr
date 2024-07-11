import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../shared/services/http.service';
import {ICurrencyExchangeRate} from '../shared/interfaces/exchange-rate.interface';
import {Subscription} from 'rxjs';
import {ModalService} from '../shared/services/modal.service';

@Component({
  selector: 'app-real-time-currency',
  templateUrl: './real-time-currency.component.html',
  styleUrls: ['./real-time-currency.component.scss']
})
export class RealTimeCurrencyComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  exchangeRate: number | null = null;
  previousExchangeRate: number | null = null;
  color: string | undefined;
  title: string | undefined;

  constructor(private httpService: HttpService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.subscription.add(this.httpService.getExchangeRatePolling().subscribe(
      (data: ICurrencyExchangeRate) => {
        const newRate = parseFloat(data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        this.title = `${data['Realtime Currency Exchange Rate']['2. From_Currency Name']} to ${data['Realtime Currency Exchange Rate']['4. To_Currency Name']}`;
        if (this.exchangeRate) {
          if (newRate > this.exchangeRate) {
            this.color = '#21ba45';
          } else if (newRate < this.exchangeRate) {
            this.color = '#db2828';
          } else {
            this.color = 'black';
          }
        }
        this.previousExchangeRate = this.exchangeRate;
        this.exchangeRate = newRate;
      },
      error => {
        this.modalService.modalConfigs$.next({ show: true, title: 'Error in exchange rate', content: 'Exchange rate service failed, refresh' })
        console.error('Error fetching exchange rate', error);
      }
    ));
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
