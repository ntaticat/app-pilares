import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { ChallengeNewPageComponent } from './challenge-new-page/challenge-new-page.component';

const routes: Routes = [
  {
    path: 'challenges',
    component: ChallengesPageComponent,
  },
  {
    path: 'challenges/new',
    component: ChallengeNewPageComponent,
  },
  {
    path: 'challenges/:id',
    component: ChallengePageComponent,
  },
  {
    path: 'trivia/new',
    component: TriviaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
