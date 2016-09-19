import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config'
import 'rxjs/Rx';

@Injectable()
export class MovieService {

    constructor(private http:Http, private config:Config) {}

    findAll(): Observable<IMovie[]>{
        return this.http.get(this.config.api.movie.findAll)
            .map((response: Response) => <IMovie[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || "Server error");
    }

    //create()
}