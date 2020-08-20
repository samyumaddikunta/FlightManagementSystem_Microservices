import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {

  data: any = {};
  payload: any = [];
  flight: any = {};
  source: any = {};
  destination: any = {};

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }
  addSchedule() {
  console.log(this.data.departure, '-', this.data.arrival)
  this.flightService.searchFlight(this.data.flight).subscribe((res: any) => {
    this.flight = res;
    this.flightService.getAirport(this.data.source).subscribe((res: any) => {
      this.source = res;
      this.flightService.getAirport(this.data.destination).subscribe((res: any) => {
        this.destination = res;
        this.payload = JSON.parse(JSON.stringify(this.data));
        this.payload.flight = this.flight;
        this.payload.source = this.source;
        this.payload.destination = this.destination;
        this.payload.departure = this.data.departure;
        this.payload;this.payload.arrival = this.data.arrival;

        this.flightService.addSchedule(this.payload).subscribe((res: any) => {
          
          alert("Schedule added successfully");
        },
          (error) => {
            alert("added successfully");
          })
      })
    })
  })

}
}