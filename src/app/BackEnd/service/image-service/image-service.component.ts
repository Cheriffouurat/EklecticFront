import { Component } from '@angular/core';
import {Service} from "../../../Model/Service";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServService} from "../../../Service/serv.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {AlertComponent} from "@coreui/angular";

@Component({
  selector: 'app-image-service',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    AlertComponent,
    NgIf
  ],
  templateUrl: './image-service.component.html',
  styleUrl: './image-service.component.scss'
})
export class ImageServiceComponent {
  id!:number;
  image!: File;
  imageUrl: any;

  visible = [true, false];
  dismissible = true;


  constructor(private ServService: ServService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }



  addImageToService() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

    // Vérifier si un fichier a été sélectionné
    if (!fileInput.files || !fileInput.files.length) {
      console.error('Veuillez sélectionner une image.');
      return;
    }

    // Récupérer le premier fichier sélectionné
    const file = fileInput.files[0];
    this.image = file;

    // Appeler le service avec l'ID du service et l'image sélectionnée
    this.ServService.AddAndUpdateImageToService(this.id, this.image).subscribe({
      next: () => {
        this.visible = [true, this.dismissible]; // Afficher l'alerte en cas de succès
        setTimeout(() => this.visible = [false, this.dismissible], 5000); // Masquer l'alerte après 5 secondes
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de l\'image:', err);
      }
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.image = file; // Met à jour `image` pour être utilisé dans `addImageToService`
        this.addImageToService(); // Appelle `addImageToService` après la sélection du fichier
      };
    }
  }
  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }


}
