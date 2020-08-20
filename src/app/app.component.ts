import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight';
  showAvailability = false;

  /*flightData = [
    {
      flightNum: 141,
      model: 'Boeing737',
      carrierName: 'Airindia',
      seatCapacity: 250,
      state: 'Active'
    },
    {
      flightNum: 142,
      model: 'Boeing777',
      carrierName: 'Indigo',
      seatCapacity: 250,
      state: 'Active'
    },
    {
      flightNum: 143,
      model: 'Boeing745',
      carrierName: 'Spicejet',
      seatCapacity: 350,
      state: 'Active'
    },
    {
      flightNum: 144,
      model: 'Boeing755',
      carrierName: 'Spicejet',
      seatCapacity: 350,
      state: 'Active'
    },
  ]*/

  constructor(private router: Router) {
    //this.router.navigate(['/home']);
  }

  checkavailability() {
    this.showAvailability = true;
    console.log('check availability button clicked');
  }
  cancel() {
   this.showAvailability = false;

  }
}
