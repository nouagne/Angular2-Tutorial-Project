import { Component, OnInit } from '@angular/core';
import { IActor } from '../../interfaces/actor';
import { ActorService } from '../../services/actor.service';

@Component({
    selector: 'actor-list',
    templateUrl: './actor-list.component.html'
})
export class ActorListComponent implements OnInit {

    actors : IActor[];

    constructor(private actorService: ActorService) {
        
    }


    get fullname(): string {
        return "fullname";
    }

    ngOnInit(){
        this.actorService.findAll()
            .subscribe(actors => {  this.actors = actors;
            console.log(this.actors)});
    }

}