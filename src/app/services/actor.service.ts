import { Injectable } from '@angular/core';
import { IActor } from '../interfaces/actor';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config'
import 'rxjs/Rx';

@Injectable()
export class ActorService {
    
    constructor(private http:Http, private config:Config) {}

    findAll(): Observable<IActor[]>{
        return this.http.get(this.config.api.actor.findAll)
            .map((response: Response) => <IActor[]>response.json())
            .catch(this.handleError);
    }

        private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
    }
}