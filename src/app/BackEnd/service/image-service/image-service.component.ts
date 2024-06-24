import { Component } from '@angular/core';
import {Service} from "../../../Model/Service";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServService} from "../../../Service/serv.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-image-service',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './image-service.component.html',
  styleUrl: './image-service.component.scss'
})
export class ImageServiceComponent {
  id!:number;
  image!: File;
  imageUrl: any;


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


    // Mettre à jour l'image sélectionnée dans la propriété image
    this.image = file;

    // Appeler le service avec l'ID du service et l'image sélectionnée
    this.ServService.addImageToService(this.id, this.image).subscribe({
      next: () => this.router.navigateByUrl("/service/Service")
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

}
