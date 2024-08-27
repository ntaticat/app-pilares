import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayPageComponent } from './play-page/play-page.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { MinigamePageComponent } from './minigame-page/minigame-page.component';
import { WinnerPageComponent } from './winner-page/winner-page.component';
import { LoserPageComponent } from './loser-page/loser-page.component';

@NgModule({
  declarations: [PlayPageComponent, LearningPageComponent, ChallengePageComponent, ChallengesPageComponent, MinigamePageComponent, WinnerPageComponent, LoserPageComponent],
  imports: [CommonModule, PlayRoutingModule],
})
export class PlayModule {}
