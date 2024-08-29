import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillModule } from 'ngx-quill';

import { AdminRoutingModule } from './admin-routing.module';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TriviaPageComponent } from './trivia-page/trivia-page.component';
import { ChallengeNewPageComponent } from './challenge-new-page/challenge-new-page.component';

@NgModule({
  declarations: [
    ChallengesPageComponent,
    ChallengePageComponent,
    TriviaPageComponent,
    ChallengeNewPageComponent,
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
