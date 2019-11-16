import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  weather: any;
  cityName: string;
  country: string;
  localTime: string;
  results = new Array();
  location: {
  city: string
  }

  constructor( private weatherService: WeatherService , private storage: Storage ) {}

  ionViewWillEnter() {
this.storage.get('location').then((val) => {
    if(val != null){
      this.location = JSON.parse(val);
    }else {
      this.location = {
        city: 'New York',
      }
    }

    this.weatherService.getWeather( this.location.city )
    .subscribe( weather1 => {
        this.weather = weather1;
    }
    );
});







}



}
