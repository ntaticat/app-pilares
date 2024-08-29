import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ChallengesService,
  IChallenge,
} from '../../../data/services/challenges.service';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrl: './challenge-page.component.css',
})
export class ChallengePageComponent implements OnInit {
  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {}
}
