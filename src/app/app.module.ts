import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { RaceListModule } from './race-list/race-list.module';

import { AppComponent } from './app.component';
import { RacesComponent } from './race-list/races/races.component';
import { DetailComponent } from './race-detail/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    RaceListModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/races', pathMatch: 'full' },
      { path: 'races', component: RacesComponent },
      { path: 'races/:id', component: DetailComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
