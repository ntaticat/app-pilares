import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Crear un nuevo reto
  createChallenge(challenge: IChallenge): Observable<IChallenge> {
    return this.http.post<IChallenge>(`${this.apiUrl}/retos`, challenge);
  }

  // Obtener un reto por ID
  getChallengeById(id: number): Observable<IChallenge> {
    return this.http.get<IChallenge>(`${this.apiUrl}/retos/${id}`);
  }

  // Actualizar un reto existente
  updateChallenge(id: number, challenge: IChallenge): Observable<IChallenge> {
    return this.http.put<IChallenge>(`${this.apiUrl}/retos/${id}`, challenge);
  }

  // Obtener todos los retos
  getAllChallenges(): Observable<IChallenge[]> {
    return this.http.get<IChallenge[]>(`${this.apiUrl}/retos`);
  }

  // Eliminar un reto
  deleteChallenge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/retos/${id}`);
  }
}

export interface IChallenge {
  id?: number; // El ID es opcional porque no estará disponible al crear un nuevo reto
  title: string;
  content: string;
  mediaUrl?: string; // Opcional si no siempre se proporciona un URL de medios
}
