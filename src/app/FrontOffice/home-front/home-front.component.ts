import { Component } from '@angular/core';
import {NavigateBarComponent} from "../navigate-bar/navigate-bar.component";

@Component({
  selector: 'app-home-front',
  standalone: true,
  imports: [
    NavigateBarComponent
  ],
  templateUrl: './home-front.component.html',
  styleUrl: './home-front.component.scss'
})
export class HomeFrontComponent {

}
