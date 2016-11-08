import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './races/race.service';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ RaceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
