import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../data/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const requiredRole = route.data['role'] as string; // Rol requerido definido en la ruta
    console.log('requiredrole', requiredRole);
    const hasRole = this.authService.hasRole(requiredRole);
    console.log('hasrole', hasRole);
    if (!hasRole) {
      this.router.navigate(['/']); // Redirige a una página "No autorizado"
      return false;
    }

    return true;
  }
}
