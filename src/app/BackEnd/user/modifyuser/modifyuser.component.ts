import { Component } from '@angular/core';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-modifyuser',
  standalone: true,
    imports: [
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './modifyuser.component.html',
  styleUrl: './modifyuser.component.scss'
})
export class ModifyuserComponent {

}
