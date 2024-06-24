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
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {Service} from "../../../Model/Service";
import {ServService} from "../../../Service/serv.service";

@Component({
  selector: 'app-serviceback',
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
    TableDirective,
    NgOptimizedImage
  ],
  templateUrl: './serviceback.component.html',
  styleUrl: './serviceback.component.scss'
})
export class ServicebackComponent implements OnInit {

  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  listservice!:Service[];



  constructor(private consumerProd:ServService) { }
  ngOnInit() {

    this.consumerProd.AllService().subscribe({
      next: (data) => {
        this.listservice = data;
        console.log(this.listservice); // Affiche les données récupérées dans la console
      }
    });

  }





  deleteSERV(id:number){
    this.consumerProd.DeleteService(id).subscribe({next:()=>this.ngOnInit()});

  }

}
