import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  faTrash = faTrash;
  bookingId: any;
  bookingData: any = '';

  constructor(private route: ActivatedRoute, private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.bookingId = params.bookingID;
        this.getBookig();
      });
  }

  getBookig() {
    console.log('booking id received is ', this.bookingId);
    this.flightService.getBookingDetails(this.bookingId).subscribe((res: any) => {
      this.bookingData = res;
      console.log('booking details ', res);
    })
  }

  cancel() {
    this.flightService.deleteBooking(this.bookingId).subscribe((res: any) => {
      alert("Your booking has been Cancelled successfully");
      this.router.navigate(['/viewbookings']);
    })
  }

}
