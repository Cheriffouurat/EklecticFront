import {Component, OnInit} from '@angular/core';
import {Offre} from "../../../Model/Offre";
import {OffreService} from "../../../Service/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";

@Component({
  selector: 'app-ajouter-offre',
  standalone: true,
  imports: [
    FormsModule,
    CardHeaderComponent,
    CardComponent,
    CardBodyComponent
  ],
  templateUrl: './ajouter-offre.component.html',
  styleUrl: './ajouter-offre.component.scss'
})
export class AjouterOffreComponent implements OnInit{
  idServiceType!:number;
  offre: Offre = new Offre();


  constructor(private offreService:OffreService, private route: ActivatedRoute ,private router:Router) {
  }

  ngOnInit() {
    this.idServiceType = this.route.snapshot.params['id'];
    console.log("offre",this.offre)


  }
  AjouterOffrePourServiceType(){

    this.offreService.AddOffreToServiceType(this.offre,this.idServiceType).subscribe(()=>this.router.navigateByUrl("/Offres/ServiceTypeToOffre"));
  }



}
