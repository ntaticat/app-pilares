import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { CollectiblesPageComponent } from './collectibles-page/collectibles-page.component';
import { PrizesPageComponent } from './prizes-page/prizes-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    CollectiblesPageComponent,
    PrizesPageComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
