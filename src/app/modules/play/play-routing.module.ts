import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayPageComponent } from './play-page/play-page.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { WinnerPageComponent } from './winner-page/winner-page.component';
import { LoserPageComponent } from './loser-page/loser-page.component';
import { MinigamePageComponent } from './minigame-page/minigame-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlayPageComponent,
  },
  {
    path: 'challenges',
    component: ChallengesPageComponent,
  },
  {
    path: 'challenges/:id',
    component: ChallengePageComponent,
  },
  {
    path: 'challenges/:id/learning',
    component: LearningPageComponent,
  },
  {
    path: 'challenges/:id/minigame',
    component: MinigamePageComponent,
  },
  {
    path: 'winner',
    component: WinnerPageComponent,
  },
  {
    path: 'loser',
    component: LoserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayRoutingModule {}
