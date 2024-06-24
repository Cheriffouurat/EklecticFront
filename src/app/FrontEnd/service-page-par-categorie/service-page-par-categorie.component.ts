import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ServiceTypeService} from "../../Service/service-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServService} from "../../Service/serv.service";
import {Service} from "../../Model/Service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-service-page-par-categorie',
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgForOf
  ],
  templateUrl: './service-page-par-categorie.component.html',
  styleUrl: './service-page-par-categorie.component.scss'
})
export class ServicePageParCategorieComponent {
  id!:number;
  serviceBycategorie!:Service[];
  constructor(private ServService: ServService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ServService.AllServiceByCategorie(this.id).subscribe({
      next: (data) => this.serviceBycategorie = data

    });
  }

}
