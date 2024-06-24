import {Component, OnInit} from '@angular/core';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective, TableColorDirective, TableDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Service} from "../../../Model/Service";
import {ServService} from "../../../Service/serv.service";
import {ServicesType} from "../../../Model/ServicesType";
import {ServiceTypeService} from "../../../Service/service-type.service";

@Component({
  selector: 'app-service-type-back',
  standalone: true,
  imports: [
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    ButtonGroupComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    NgForOf,
    RouterLink,
    TableColorDirective,
    TableDirective,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './service-type-back.component.html',
  styleUrl: './service-type-back.component.scss'
})
export class ServiceTypeBackComponent implements OnInit{


  listserviceType!:ServicesType[];



  constructor(private consumerServiceTyoe:ServiceTypeService) { }
  ngOnInit() {
    this.consumerServiceTyoe.AllServiceType().subscribe({
      next: (data) => {
        this.listserviceType = data;
      }
    });
  }





  deleteSERV(id:number){
    this.consumerServiceTyoe.DeleteServiceType(id).subscribe({next:()=>this.ngOnInit()});

  }



}
