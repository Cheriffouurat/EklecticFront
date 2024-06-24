import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Categorie} from "../../../Model/Categorie";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modifycategorie',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './modifycategorie.component.html',
  styleUrl: './modifycategorie.component.scss'
})
export class ModifycategorieComponent {
  id!:number;
  categorie!:Categorie;
  constructor(private CategorieService: CategorieServiceService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.CategorieService.GetOneCategorie(this.id).subscribe({next:(data)=>this.categorie=data
    });


  }
  ModifierCategorie(){
    this.CategorieService.ModifyCategorie(this.categorie).subscribe(()=>this.router.navigateByUrl("/categorie/categorie"));
  }

}
