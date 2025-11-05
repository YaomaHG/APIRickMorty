// Importaciones de Angular y Ionic
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonText } from '@ionic/angular/standalone';
// Importaciones de servicios e interfaces personalizadas
import { RickandmortyService } from '../services/rickandmorty.service';
import { Character } from '../interfaces/character.interface';

// Decorador de Componente que define metadatos para HomePage
@Component({
  selector: 'app-home', // Selector CSS para usar este componente
  templateUrl: 'home.page.html', // Ruta a la plantilla HTML del componente
  styleUrls: ['home.page.scss'], // Ruta a los estilos CSS del componente
  standalone: true, // Indica que el componente es autocontenido
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonText], // Módulos y componentes importados
})
// Clase del componente HomePage que implementa OnInit para el ciclo de vida
export class HomePage implements OnInit {
  // Propiedades del componente
  characters: Character[] = []; // Array para almacenar los personajes
  loading = true; // Indicador de carga
  error = false; // Indicador de error

  // Inyección del servicio RickandmortyService
  constructor(private rickandmortyService: RickandmortyService) {}

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit() {
    this.loadCharacters(); // Llama al método para cargar los personajes
  }

  // Método para cargar los personajes desde el servicio
  loadCharacters() {
    this.loading = true; // Inicia el indicador de carga
    this.error = false; // Resetea el indicador de error
    // Se suscribe al Observable devuelto por el servicio
    this.rickandmortyService.getCharacters().subscribe(
      (data) => {
        // En caso de éxito
        this.characters = data.results; // Asigna los resultados al array de personajes
        this.loading = false; // Detiene el indicador de carga
      },
      (error) => {
        // En caso de error
        console.error('Error fetching characters', error); // Muestra el error en consola
        this.loading = false; // Detiene el indicador de carga
        this.error = true; // Activa el indicador de error
      }
    );
  }
}
