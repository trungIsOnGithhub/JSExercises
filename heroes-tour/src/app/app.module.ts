import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormGroupDirective, FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
