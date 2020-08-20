import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {
  data: any = {};
  showDiv = false;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  updateFlight(data) {
    console.log('updating ', data)
    this.showDiv = true;
    this.data = data;
  }

  update() {
    this.flightService.addFlight(this.data).subscribe((res: any) => {
      alert("Flight updated successfully");
      this.showDiv = false;
    },
    (error) => {
      alert("Flight ");
      this.showDiv = false;
    })
  }

}
