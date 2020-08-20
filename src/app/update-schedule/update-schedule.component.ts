import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {
  showDiv = false;
  data: any = {};
  payload: any = [];
  flight: any = {};
  source: any = {};
  destination: any = {};

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  update() {
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
          this.payload; this.payload.arrival = this.data.arrival;

          this.flightService.addSchedule(this.payload).subscribe((res: any) => {
            alert("Schedule updated successfully");
            this.showDiv = false;
          },
            (error) => {
              alert("Flight ");
            })
        })
      })
      
    })
  }

  updateSchedule(schedule) {
    console.log('received here')
    this.data.scheduleId = schedule.scheduleId;
    this.data.flight = schedule.flight.flightNo;
    this.data.source = schedule.source.airportId;
    this.data.destination = schedule.destination.airportId;
    this.data.fare = schedule.fare;
    this.data.departure = schedule.departure;
    this.data.arrival = schedule.arrival;
    this.showDiv = true;
  }
}