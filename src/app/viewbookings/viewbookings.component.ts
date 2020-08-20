import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {
  faArrowRight = faArrowRight;
 
  bookingData: any = [];

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.flightService.getAllBookings().subscribe((res: any) => {
      this.bookingData = res;
    })
  }

  book(bookingId) {
    this.router.navigate(['bookingdetails'], { queryParams: {bookingID: bookingId}});
  }

}
