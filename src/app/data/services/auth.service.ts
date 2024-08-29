import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  private phoneNumber: string | null = null;
  private roles: string[] = [];

  constructor(private http: HttpClient) {
    this.decodeToken();
  }

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
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/participantes/profile`, { headers });
    }
    return throwError(() => new Error('No token available'));
  }

  // Método para obtener el estado de autenticación
  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Método para decodificar el token JWT y obtener el phoneNumber
  private decodeToken(): any {
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    const decodedToken: any = jwtDecode(token);
    this.phoneNumber = decodedToken.phoneNumber || null;
    this.roles = decodedToken.roles || [];

    return decodedToken;
  }
  hasRole(role: string): boolean {
    const userData = this.decodeToken();
    return userData.role ?? 'Guest';
  }

  // Método para manejar el login y almacenamiento del token
  loginUser(token: string): void {
    localStorage.setItem('token', token);
    this.decodeToken();
    this.isAuthenticatedSubject.next(true);
  }

  // Método para manejar el logout y limpieza del almacenamiento local
  logout(): void {
    this.phoneNumber = null;
    this.roles = [];
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  // Método para verificar si hay un token almacenado
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
