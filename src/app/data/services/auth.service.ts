import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo participante
  register(
    username: string,
    phoneNumber: string,
    password: string
  ): Observable<any> {
    const body = { username, phoneNumber, password };
    return this.http.post(`${this.apiUrl}/participantes/register`, body).pipe(
      catchError((error) => {
        let errorMessage = 'Error desconocido';
        if (error.status === 409) {
          errorMessage =
            'El número de celular o nombre de usuario ya está en uso';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Método para iniciar sesión
  login(phoneNumber: string, password: string): Observable<any> {
    const body = { phoneNumber, password };
    return this.http.post(`${this.apiUrl}/auth/login`, body).pipe(
      catchError((error) => {
        let errorMessage = 'Error desconocido';
        if (error.status === 404) {
          errorMessage = 'Número de celular no encontrado';
        } else if (error.status === 401) {
          errorMessage = 'Contraseña incorrecta';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Método para obtener el perfil del participante (requiere autenticación)
  getProfile(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/participantes/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
