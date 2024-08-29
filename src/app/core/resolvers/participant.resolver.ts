import { Injectable } from '@angular/core';
import { AuthService } from '../../data/services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParticipantResolver {
  constructor(private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.authService.getProfile().pipe(
      catchError(() => {
        // Devuelve un valor por defecto si hay un error (por ejemplo, si no hay token)
        return of({ username: 'Guest', phoneNumber: null });
      })
    );
  }
}
