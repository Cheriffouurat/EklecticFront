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
import {RouterLink} from "@angular/router";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";

@Component({
  selector: 'app-categorieback',
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
  templateUrl: './categorieback.component.html',
  styleUrl: './categorieback.component.scss'
})
export class CategoriebackComponent implements OnInit {

  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  listcategorie!:Categorie[];


  constructor(private consumerProd:CategorieServiceService) { }
  ngOnInit() {

    this.consumerProd.AllCategorie().subscribe({next: (data) => this.listcategorie = data,
    });

  }





  deleteCAT(id:number){
    this.consumerProd.DeleteCategorie(id).subscribe({next:()=>this.ngOnInit()});

  }

}
