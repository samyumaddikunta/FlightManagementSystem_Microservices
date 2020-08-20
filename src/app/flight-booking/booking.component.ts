import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  State: any = ['Hyderabad', 'Mumbai', 'Delhi', 'Kerala' , 'Banglore'];
  stateName: any = [];
  data: any = {};
  faSearch = faSearch;
  flightData: any = [];
  showFlights = false;
  availableFlights: any = [];

  constructor(private flightService: FlightService, private router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getFlights();
  }
  changeState(e) {
    this.stateName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  getFlights() {
    
    this.flightService.getAllSchedules().subscribe((res: any) => {
      console.log('flights ', res)
      this.flightData = res;
    })
  }

  search() {
    console.log('search fields ',  this.flightData[0].source.area)
    this.availableFlights = this.flightData.filter(f => f.source.area === this.data.source
                                                      && f.destination.area === this.data.destination
                                                      && this.compareDates(this.data.date, f.departure));
    console.log('total available flights ' + this.availableFlights.length);
    this.showFlights = true;
  }

  book(scheduleId) {
    this.router.navigate(['/passenger'], { queryParams: {scheduleId: scheduleId}});
  }

  compareDates(date1, date2) {
    console.log('dates ', date1, ' ', date2);
    let latest_date =this.datepipe.transform(date2, 'yyyy-MM-dd');
    console.log('dates ', date1, ' ', latest_date);
    if (date1 == latest_date) {
      return true;
    } else {
      return false;
    }
  }
}
