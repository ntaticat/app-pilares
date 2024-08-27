import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, QuillModule.forRoot()],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
