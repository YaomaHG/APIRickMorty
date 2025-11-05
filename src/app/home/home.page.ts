import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonText } from '@ionic/angular/standalone';
import { RickandmortyService } from '../services/rickandmorty.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner, IonText],
})
export class HomePage implements OnInit {
  characters: Character[] = [];
  loading = true;
  error = false;

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    this.error = false;
    this.rickandmortyService.getCharacters().subscribe(
      (data) => {
        this.characters = data.results;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching characters', error);
        this.loading = false;
        this.error = true;
      }
    );
  }
}
