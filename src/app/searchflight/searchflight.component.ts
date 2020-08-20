import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../flight.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  faSearch = faSearch;
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  @Output()
  updateFlight: EventEmitter<any> = new EventEmitter();
  flightData: any = [];
  data: any = {};

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights() {
    this.flightService.getAllFlights().subscribe((res: any) => {
      this.flightData = res;
    })
  }

  searchFlight() {
    this.flightService.searchFlight(this.data.flightNo).subscribe((res: any) => {
      let flight = [];
      flight[0] = res;
      this.flightData = flight;
      alert("Flight is available");
    },
    (error) => { 
      alert("Flight is not available");
    })
  }

  update(flight) {
    this.updateFlight.emit(flight);
  }

  delete(flightNo) {
    this.flightService.deleteFlight(flightNo).subscribe((res: any) => {
      alert('flight delete successfully');
      this.getAllFlights();
    })
  }



}
