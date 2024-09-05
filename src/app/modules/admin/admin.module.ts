import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillModule } from 'ngx-quill';

import { AdminRoutingModule } from './admin-routing.module';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { ChallengeNewPageComponent } from './challenge-new-page/challenge-new-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CollectiblesPageComponent } from './collectibles-page/collectibles-page.component';
import { CollectiblePageComponent } from './collectible-page/collectible-page.component';
import { CollectibleNewPageComponent } from './collectible-new-page/collectible-new-page.component';
import { MinigamesPageComponent } from './minigames-page/minigames-page.component';
import { ParticipantsPageComponent } from './participants-page/participants-page.component';
import { PrizesPageComponent } from './prizes-page/prizes-page.component';
import { PrizePageComponent } from './prize-page/prize-page.component';
import { ParticipantPageComponent } from './participant-page/participant-page.component';
import { MinigamePageComponent } from './minigame-page/minigame-page.component';
import { PrizeNewPageComponent } from './prize-new-page/prize-new-page.component';

@NgModule({
  declarations: [
    ChallengesPageComponent,
    ChallengePageComponent,
    TriviaPageComponent,
    ChallengeNewPageComponent,
    AdminPageComponent,
    CollectiblesPageComponent,
    CollectiblePageComponent,
    CollectibleNewPageComponent,
    MinigamesPageComponent,
    ParticipantsPageComponent,
    PrizesPageComponent,
    PrizePageComponent,
    ParticipantPageComponent,
    MinigamePageComponent,
    PrizeNewPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
})
export class AdminModule {}
