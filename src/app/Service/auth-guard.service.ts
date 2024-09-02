import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, map, Observable, of} from "rxjs";
import {jwtDecode} from "jwt-decode";
import {UserServService} from "./user-serv.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private userService:UserServService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');

    // Définir les routes qui ne nécessitent pas d'authentification
    const nonProtectedRoutes = ['/HomePage', '/about', '/contact']; // Ajoutez ici toutes les routes non protégées
    const currentRoute = state.url;

    // Si la route est non protégée, permettre l'accès
    if (nonProtectedRoutes.includes(currentRoute)) {
      return true;
    }

    // Si l'utilisateur est non connecté ou le token est absent
    if (!token) {
      this.router.navigate(['/HomePage']);
      return false;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      if (typeof decodedToken === 'object' && decodedToken.hasOwnProperty('sub')) {
        const username: string = decodedToken.sub;

        return this.userService.getUserByUsername(username).pipe(
          map((user: any) => {
            const expectedRole = next.data['expectedRole'];

            // Si la route est réservée à un admin
            if (expectedRole && user.role.toLowerCase() !== expectedRole.toLowerCase()) {
              this.router.navigate(['/unauthorized']);
              return false;
            }

            return true;
          }),
          catchError((error) => {
            console.error('Error fetching user details:', error);
            this.router.navigate(['/unauthorized']);
            return of(false);
          })
        );
      } else {
        this.router.navigate(['/HomePage']);
        return false;
      }
    } catch (e) {
      this.router.navigate(['/HomePage']);
      return false;
    }
  }
}
