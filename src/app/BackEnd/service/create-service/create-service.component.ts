import {Component, OnInit} from '@angular/core';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {Service} from "../../../Model/Service";
import {Router} from "@angular/router";
import {ServService} from "../../../Service/serv.service";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.scss'
})
export class CreateServiceComponent implements OnInit{
  service!:Service
  listcategorie!:Categorie[];
  categorie : Categorie  = new Categorie();
  Categorieid!:number;

  constructor(private consumerProd:ServService,private route:Router,private CategorieProd:CategorieServiceService) { }
  ngOnInit() {

    this.service=new Service;
    this.CategorieProd.AllCategorie().subscribe({next: (data) => this.listcategorie = data,
    });

  }

  addService(): void {

    if (this.Categorieid !== null) {

      this.CategorieProd.GetOneCategorie(this.Categorieid).subscribe(
        (categorie) => {
          console.log('Catégorie récupérée avec succès !', categorie);
          // Attribuer la catégorie récupérée au service
          this.service.Categorie = categorie;
          console.log('la catégorie récupérée au service',  this.service.Categorie = categorie);
          // Ajouter le service avec la catégorie correspondante
          this.consumerProd.AddService(this.service,this.Categorieid).subscribe(
            () => {
              console.log('Service créé avec succès !');
              this.route.navigateByUrl('/service/Service');
            },
            (error) => {
              console.log('Erreur lors de la création du service:', error);
            }
          );
        },
        (error) => {
          console.log('Erreur lors de la récupération de la catégorie:', error);
        }
      );
    } else {
      console.log('Veuillez sélectionner une catégorie.');
    }
  }








}
{

}
