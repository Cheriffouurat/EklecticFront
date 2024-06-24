import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    NavigationBarComponent
  ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent {

}
