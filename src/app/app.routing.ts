import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';

const appRoutes: Routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'actors', component: ActorListComponent },
    { path: '', component: MovieListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);