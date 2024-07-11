import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generic-modal-message',
  templateUrl: './generic-modal-message.component.html',
  styleUrls: ['./generic-modal-message.component.scss']
})
export class GenericModalMessageComponent {
  @Input() title: string | undefined;
  @Input() content: string | undefined;

  constructor() {
  }

}
