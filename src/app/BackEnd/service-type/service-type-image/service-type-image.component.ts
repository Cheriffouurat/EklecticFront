import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceTypeService} from "../../../Service/service-type.service";
import {AlertComponent} from "@coreui/angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-service-type-image',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    NgIf
  ],
  templateUrl: './service-type-image.component.html',
  styleUrl: './service-type-image.component.scss'
})
export class ServiceTypeImageComponent { id!:number;
  image!: File;
  imageUrl: any;
  visible = [true, false];
  dismissible = true;



  constructor(private ServService: ServiceTypeService , private route: ActivatedRoute ,private router:Router) {}

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


    // Mettre à jour l'image sélectionnée dans la propriété image
    this.image = file;

    // Appeler le service avec l'ID du service et l'image sélectionnée
    this.ServService.ModifierAjouterImage(this.id, this.image).subscribe({
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
        this.addImageToService()
      };
    }
  }
  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }


  protected readonly event = event;
}
