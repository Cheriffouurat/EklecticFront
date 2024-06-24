import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceTypeService} from "../../../Service/service-type.service";

@Component({
  selector: 'app-service-type-image',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './service-type-image.component.html',
  styleUrl: './service-type-image.component.scss'
})
export class ServiceTypeImageComponent { id!:number;
  image!: File;
  imageUrl: any;


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
    this.ServService.addImageToServiceType(this.id, this.image).subscribe({
      next: () => this.router.navigateByUrl("/TypeService/ServicetypeBack")
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
