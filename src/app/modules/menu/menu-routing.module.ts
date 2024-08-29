import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectiblesPageComponent } from './collectibles-page/collectibles-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrizesPageComponent } from './prizes-page/prizes-page.component';
import { ParticipantResolver } from '../../core/resolvers/participant.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: {
      user: ParticipantResolver,
    },
  },
  {
    path: 'collectibles',
    component: CollectiblesPageComponent,
  },
  {
    path: 'prizes',
    component: PrizesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
