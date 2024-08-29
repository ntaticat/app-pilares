import { Component } from '@angular/core';
import {
  ChallengesService,
  IChallenge,
} from '../../../data/services/challenges.service';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrl: './challenges-page.component.css',
})
export class ChallengesPageComponent {
  challenges: IChallenge[] = [];

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.loadChallenges();
  }

  loadChallenges(): void {
    this.challengesService.getAllChallenges().subscribe({
      next: (data: IChallenge[]) => {
        this.challenges = data;
      },
      error: (error) => {
        console.error('Error al cargar los retos', error);
      },
    });
  }
}
