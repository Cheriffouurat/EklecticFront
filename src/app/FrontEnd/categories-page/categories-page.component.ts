import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {Service} from "../../Model/Service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServService} from "../../Service/serv.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgForOf
  ],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent {
  service!:Service[];
  constructor(private ServService: ServService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {


    this.ServService.AllService().subscribe({
      next: (data) => this.service = data

    });
  }

}
