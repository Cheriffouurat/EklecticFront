import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() isSuccess: boolean = true;

}
