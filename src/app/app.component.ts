import { Component } from '@angular/core';
import { WeatherService } from './app.weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  title = 'app works!';
  isCurrent: boolean = false;
  country: string;
  weatherData: any;

  constructor(private weatherService: WeatherService) {
    console.log('constructor');
    if (navigator.geolocation) {
      console.log('Geolocation is supported by browser');
      this.currentPosition();
    } else {

    }
  }
  currentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('position:', position);
    });


    // console.log('Latitude: ' + position.coords.latitude, 'Longitude: ' + position.coords.longitude); 
  }
  getDetails() {
    console.log('getDetails');
    if (this.isCurrent) {


    } else {
      console.log(this.country);
      console.log(this.weatherService);
      this.weatherService.getWeatherForCity(this.country)
      .subscribe(
        (res) => {
          console.log('data', res);   
          this.weatherData = res;       
        }
      );     
      

    }
  }
}
