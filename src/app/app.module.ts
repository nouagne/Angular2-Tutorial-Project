import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorService } from './services/actor.service';
import { Config } from './config';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent
  ],
  providers: [appRoutingProviders, MovieService, Config, ActorService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
