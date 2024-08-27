import { Component } from '@angular/core';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrl: './challenges-page.component.css',
})
export class ChallengesPageComponent {
  retos = [
    {
      nombre: 'Reto 1',
      numero: 1,
    },
  ];
}
