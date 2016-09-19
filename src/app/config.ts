import {Injectable} from '@angular/core'

@Injectable()
export class Config{

    private apiUrl:string;

    api = {
        'movie' : {
            'findAll' : this.API_URL + '/api/movies'
        },
        'actor' : {
            'findAll' : this.API_URL + '/api/actors'
        }
    }

    public get API_URL() : string {
        var env:string;
        env = window.location.hostname;
        switch (env) {
            case 'localhost':
                env = 'http://movies-demo.local:88';
                break;
            default:
                break;
        }
        return env;
    }

}

