import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Service} from "../../../Model/Service";
import {ServService} from "../../../Service/serv.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-modifyservice',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './modifyservice.component.html',
  styleUrl: './modifyservice.component.scss'
})
export class ModifyserviceComponent {
  id!:number;
  service!:Service;
  listcategorie!:Categorie[];
  Categorieid!:number;
  Image!:File;
  imageUrl: any;

  constructor(private ServService: ServService,private CategorieProd: CategorieServiceService  , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ServService.GetOneService(this.id).subscribe({
      next: (data) => this.service = data

    });
    this.CategorieProd.AllCategorie().subscribe({
      next: (data) => this.listcategorie = data
    });
  }




  ModifierService(){
    this.ServService.AddService(this.service,this.Categorieid).subscribe(()=>this.router.navigateByUrl("/service/Service"));
  }
  ModifierImage(){
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

    // Vérifier si un fichier a été sélectionné
    if (!fileInput.files || !fileInput.files.length) {
      console.error('Veuillez sélectionner une image.');
      return;
    }

    const file = fileInput.files[0];


    // Mettre à jour l'image sélectionnée dans la propriété image
    this.Image = file;

    // Appeler le service avec l'ID du service et l'image sélectionnée
    this.ServService.AddAndUpdateImageToService(this.id, this.Image).subscribe({

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


  protected readonly event = event;
}
