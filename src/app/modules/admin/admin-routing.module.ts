import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { ChallengeNewPageComponent } from './challenge-new-page/challenge-new-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CollectiblesPageComponent } from './collectibles-page/collectibles-page.component';
import { CollectibleNewPageComponent } from './collectible-new-page/collectible-new-page.component';
import { CollectiblePageComponent } from './collectible-page/collectible-page.component';
import { ParticipantsPageComponent } from './participants-page/participants-page.component';
import { ParticipantPageComponent } from './participant-page/participant-page.component';
import { MinigamesPageComponent } from './minigames-page/minigames-page.component';
import { PrizesPageComponent } from './prizes-page/prizes-page.component';
import { PrizeNewPageComponent } from './prize-new-page/prize-new-page.component';
import { PrizePageComponent } from './prize-page/prize-page.component';
import { MinigamePageComponent } from './minigame-page/minigame-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
  },
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
    path: 'collectibles',
    component: CollectiblesPageComponent,
  },
  {
    path: 'collectibles/new',
    component: CollectibleNewPageComponent,
  },
  {
    path: 'collectibles/:id',
    component: CollectiblePageComponent,
  },
  {
    path: 'minigames/trivia/new',
    component: TriviaPageComponent,
  },
  {
    path: 'minigames',
    component: MinigamesPageComponent,
  },
  {
    path: 'minigames/:id',
    component: MinigamePageComponent,
  },
  {
    path: 'participants',
    component: ParticipantsPageComponent,
  },
  {
    path: 'participants/:id',
    component: ParticipantPageComponent,
  },
  {
    path: 'prizes',
    component: PrizesPageComponent,
  },
  {
    path: 'prizes/new',
    component: PrizeNewPageComponent,
  },
  {
    path: 'prizes/:id',
    component: PrizePageComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
