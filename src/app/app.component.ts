import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from './shared/services/modal.service';
import {Subscription} from 'rxjs';
import {IModalConfigs} from './shared/interfaces/modal.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  modalConfigs: IModalConfigs | undefined;

  constructor(public modalService: ModalService, private cd: ChangeDetectorRef)  {
  }

  ngOnInit() {
    this.subscription.add(this.modalService.modalConfigs$.subscribe((res: IModalConfigs) => {
      this.modalConfigs = res
      this.cd.detectChanges();
    }));
  }

  closeModal() {
    this.modalService.modalConfigs$.next({ show: false, title: null, content: null })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
