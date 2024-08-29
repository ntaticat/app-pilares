import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  features = [
    {
      title: 'Minijuegos',
      description: 'Participa en nuestros emocionantes minijuegos.',
      icon: 'assets/icons/minigames-icon.png', // Asegúrate de tener un ícono en esta ruta
      link: '/minijuegos',
    },
    {
      title: 'Estadísticas',
      description: 'Consulta tus estadísticas y progreso.',
      icon: 'assets/icons/stats-icon.png',
      link: '/estadisticas',
    },
    {
      title: 'Desafíos',
      description: 'Completa desafíos y gana premios.',
      icon: 'assets/icons/challenges-icon.png',
      link: '/desafios',
    },
    // Agrega más características según las funcionalidades de tu aplicación
  ];

  constructor(private router: Router) {}

  navigateToFeature(link: string): void {
    this.router.navigate([link]);
  }
}
