import { Component } from '@angular/core';
import {CategorieServiceService} from "../../Service/categorie-service.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ServiceTypeService} from "../../Service/service-type.service";
import {ServiceTypeEnum} from "../../Model/ServiceTypeEnum";
import {ServicesType} from "../../Model/ServicesType";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-service-type-deatil',
  standalone: true,
  imports: [
    NavigationBarComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './service-type-deatil.component.html',
  styleUrl: './service-type-deatil.component.scss'
})
export class ServiceTypeDeatilComponent {
  id!:number;
  servicetype!:ServicesType;
  constructor(private ServType: ServiceTypeService, private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ServType.GetOneServiceType(this.id).subscribe({
      next: (data) => this.servicetype = data

    });


  }

}
