import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';


@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {

    movies : IMovie[];

    constructor(private movieService:MovieService) { }

    ngOnInit(){
        this.movieService.findAll()
            .subscribe(movies => { 
                this.movies = movies; console.log(this.movies); 
            })
    }

}