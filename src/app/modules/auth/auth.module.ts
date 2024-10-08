import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPageComponent, LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
