import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IModalConfigs} from '../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalConfigs$: BehaviorSubject<IModalConfigs> = new BehaviorSubject<IModalConfigs>({
    show: false,
    title: null,
    content: null
  });

  constructor() {
  }

  showModal(config: IModalConfigs) {
    this.modalConfigs$.next(config);
  }
}
