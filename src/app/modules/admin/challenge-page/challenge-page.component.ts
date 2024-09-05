import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ChallengesService,
  IChallenge,
} from '../../../data/services/challenges.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrl: './challenge-page.component.css',
})
export class ChallengePageComponent implements OnInit {
  sanitizedContent: SafeHtml | undefined;

  challenge: IChallenge = {
    id: 0,
    title: '',
    content: '',
  };

  constructor(
    private challengesService: ChallengesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.challengesService
        .getChallengeById(Number(id))
        .subscribe((data: IChallenge) => {
          this.challenge = data;
          this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(
            this.challenge.content
          );
        });
    }
  }
}
