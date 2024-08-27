import { Component } from '@angular/core';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrl: './challenges-page.component.css',
})
export class ChallengesPageComponent {
  challenges = [
    {
      id: '',
      title: '',
      content: '',
    },
  ];

  editChallenge(challengeId: string) {}

  deleteChallenge(challengeId: string) {}
}
