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
import {Offre} from "../../../Model/Offre";
import {ServiceTypeService} from "../../../Service/service-type.service";
import {OffreService} from "../../../Service/offre.service";

@Component({
  selector: 'app-offre',
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
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.scss'
})
export class OffreComponent implements OnInit {

  listeOffre!:Offre[];
  constructor(private offreService:OffreService, private route: ActivatedRoute ,private router:Router) {
  }


    ngOnInit(){
      this.offreService.AllOffre().subscribe({
        next: (data) => {
          this.listeOffre = data;
        }
      });
    }

}
