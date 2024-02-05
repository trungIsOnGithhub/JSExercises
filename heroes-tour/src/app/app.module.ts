import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIf,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
