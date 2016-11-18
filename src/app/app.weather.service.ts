import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

@Injectable()
export class WeatherService {
    constructor(private http: Http) { }
    createCommonHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        //  headers.append('Content-Type', 'application/json');
        // headers.set('Authorization', sessionStorage.getItem('Authorization'));
        return headers;
    }

    getWeatherForCountry(country) {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=31f45e343de0c1aba0a4266f106e7b23`;
        let options = new RequestOptions({ headers: this.createCommonHeaders() });
        return this.http.get(url, options)
            .map((res: Response) => {
                return res.json();
            });
    }
    getWeatherForCurrentLocation(lat: number, lon: number) {
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=31f45e343de0c1aba0a4266f106e7b23`;
        let options = new RequestOptions({ headers: this.createCommonHeaders() });
        return this.http.get(url, options)
            .map((res: Response) => {
                return res.json();
            });
    }
}
