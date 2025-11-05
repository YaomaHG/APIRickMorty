// Importaciones necesarias para el servicio
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';

// Decorador que marca la clase como un servicio inyectable
@Injectable({
  providedIn: 'root' // El servicio estará disponible en toda la aplicación
})
export class RickandmortyService {

  // Inyección del servicio HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  /**
   * Método para obtener la lista de personajes de la API.
   * @returns Un Observable con la respuesta de la API.
   */
  getCharacters(): Observable<any> {
    // Realiza una petición GET a la URL de la API de personajes
    return this.http.get<any>(`${environment.apiUrl}/character`);
  }
}
