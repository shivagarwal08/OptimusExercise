import { Component } from '@angular/core';
import { WeatherService } from './app.weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  title = 'Optimus Weather Application';
  isCurrent: boolean = false;
  country: string;
  postalCode: string;
  weatherData: any;
  coords: any;
  constructor(private weatherService: WeatherService) {
    console.log('constructor');
    if (navigator.geolocation) {
      console.log('Geolocation is supported by browser');
    } else {
      console.log('Geolocation is not supported by browser');
    }
  }
  getDetails() {
    console.log('getDetails');
    this.weatherData = undefined;
    if (this.isCurrent) {
      console.log('for current location');
      navigator.geolocation.getCurrentPosition(position => {
        this.coords = position.coords;
        this.weatherService.getWeatherForCurrentLocation(this.coords.latitude, this.coords.longitude)
          .subscribe(
          (res) => {
            console.log('data', res);
            this.weatherData = res;
          });
      });

    } else {

      if (this.country) {
        console.log('for:', this.country);
        this.weatherService.getWeatherForCountry(this.country)
          .subscribe(
          (res) => {
            console.log('data', res);
            this.weatherData = res;
          }
          );
      } else if (this.postalCode) {
        console.log('for:', this.postalCode);
        this.weatherService.getWeatherForPostalCode(this.postalCode)
          .subscribe(
          (res) => {
            console.log('data', res);
            this.weatherData = res;
          }
          );
      }



    }
  }
}
