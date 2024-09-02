import {Component, OnInit} from '@angular/core';
import {
    ButtonCloseDirective,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective
} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {Service} from "../../../Model/Service";
import {Router} from "@angular/router";
import {ServService} from "../../../Service/serv.service";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-create-service',
  standalone: true,
    imports: [
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        FormsModule,
        NgForOf,
        ButtonCloseDirective,
        ButtonDirective,
        ModalBodyComponent,
        ModalComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        NgIf
    ],
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.scss'
})
export class CreateServiceComponent implements OnInit{
  service!:Service
  listcategorie!:Categorie[];
  categorie : Categorie  = new Categorie();
  Categorieid!:number;
  public liveDemoVisible = false;


  constructor(private consumerProd:ServService,private route:Router,private CategorieProd:CategorieServiceService) { }
  ngOnInit() {

    this.service=new Service;
    this.CategorieProd.AllCategorie().subscribe({next: (data) => this.listcategorie = data,
    });

  }

  // Méthode pour afficher le modal
  confirmAddService() {
    this.toggleLiveDemo();
  }

  // Méthode pour soumettre le service après confirmation
  submitService() {
    if (this.Categorieid !== null) {
      this.CategorieProd.GetOneCategorie(this.Categorieid).subscribe(
        (categorie) => {
          this.service.Categorie = categorie;
          this.consumerProd.AddService(this.service, this.Categorieid).subscribe(
            () => {
              console.log('Service créé avec succès !');
              this.route.navigateByUrl('/service/Service');
              this.toggleLiveDemo(); // Fermer le modal après soumission
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

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    console.log(this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
    console.log(this.liveDemoVisible);
  }
}
