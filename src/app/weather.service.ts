import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: "0f8d9d99d4a7035fa0a80a1413330478";
  url;

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) {
      this.url = 'http://api.weatherstack.com/current?access_key=0f8d9d99d4a7035fa0a80a1413330478&query=';
   }

   getWeather( a ) {
    return this.http.get(this.url + a )
     .pipe(map(res => res.json()));
}
}
