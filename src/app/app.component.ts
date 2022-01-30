import { Component } from '@angular/core';

import { ApiCallService } from './services/api-call.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCity = '';
  weatherData:any ;
  envData = environment;
  constructor(private apiCallService:ApiCallService){

  }

  getWeatherData(){
    let endPoint="http://api.openweathermap.org/data/2.5/weather";
    let qParams=[
      {
        key:'q', value:this.selectedCity
      },
      {
        key:'appid', value:this.envData.apiKey
      }
    ]
    this.apiCallService.getData(endPoint,qParams).subscribe((resp)=>{
      this.weatherData = resp;
    },
    (error)=>{
      alert(error.statusText);
      this.resetWeatherData();
    })
  }

  resetWeatherData(){
    this.weatherData = null;
    this.selectedCity= '';
  }
}
