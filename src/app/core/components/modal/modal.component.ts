import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input({required: true}) title: string = ''
  @Output() detectClick: EventEmitter<void> = new EventEmitter<void>()

}
