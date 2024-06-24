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
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ServiceTypeService} from "../../../Service/service-type.service";
import {OffreService} from "../../../Service/offre.service";
import {ServiceTypeEnum} from "../../../Model/ServiceTypeEnum";
import {ServicesType} from "../../../Model/ServicesType";

@Component({
  selector: 'app-service-type-avec-offre',
  standalone: true,
    imports: [
        ButtonDirective,
        ButtonGroupComponent,
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        DropdownComponent,
        DropdownDividerDirective,
        DropdownItemDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        NgForOf,
        NgIf,
        RouterLink,
        TableColorDirective,
        TableDirective
    ],
  templateUrl: './service-type-avec-offre.component.html',
  styleUrl: './service-type-avec-offre.component.scss'
})
export class ServiceTypeAvecOffreComponent implements OnInit {
  listserviceType!:ServicesType[];


  constructor(private consumerServiceTyoe: ServiceTypeService, private route: ActivatedRoute ,private router:Router) {
  }


  ngOnInit(){
    this.consumerServiceTyoe.AllServiceType().subscribe({
      next: (data) => {
        this.listserviceType = data;
      }
    });
  }

}
