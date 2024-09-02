import { Component, OnInit } from '@angular/core';

import {
  ButtonCloseDirective, ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent, ModalBodyComponent,
  ModalComponent, ModalFooterComponent,
  ModalHeaderComponent, ModalTitleDirective
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../../../Model/Categorie';
import { CategorieServiceService } from '../../../Service/categorie-service.service';
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";



@Component({
  selector: 'app-create-categorie',
  standalone: true,
  imports: [
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormsModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ButtonDirective,
    NgIf

  ],
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss']
})
export class CreateCategorieComponent implements OnInit{
  categorie!:Categorie
  public liveDemoVisible = false;
  constructor(private consumerProd:CategorieServiceService,private route:Router ) { }
  ngOnInit() {

    this.categorie=new Categorie;

  }
  confirmAddCategorie() {
    // Afficher le modal
    this.toggleLiveDemo();

  }

  submitCategorie() {
    // Soumettre la catégorie après confirmation
    this.consumerProd.AddCategorie(this.categorie).subscribe({
      next: () => this.route.navigateByUrl("/categorie/categorie")
    });
    // Fermer le modal après soumission
    this.toggleLiveDemo();
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    console.log(this.liveDemoVisible)

  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
    console.log(this.liveDemoVisible)
  }
}
