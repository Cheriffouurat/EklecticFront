import {Component, OnInit} from '@angular/core';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-categorie',
  standalone: true,
    imports: [
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        FormsModule
    ],
  templateUrl: './create-categorie.component.html',
  styleUrl: './create-categorie.component.scss'
})
export class CreateCategorieComponent implements OnInit{
  categorie!:Categorie
  constructor(private consumerProd:CategorieServiceService,private route:Router) { }
  ngOnInit() {

    this.categorie=new Categorie;


  }
  addCategorie(){
    this.consumerProd.AddCategorie(this.categorie).subscribe({
      next:()=>this.route.navigateByUrl("/categorie/categorie")
    });
  }



}
{

}
