import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { RacesComponent } from './races/races.component';
import { RaceService } from './races/race.service';
import { RaceComponent } from './race/race.component';

@NgModule({
  declarations: [
    RacesComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [ RaceService ]
})
export class RaceListModule { }
