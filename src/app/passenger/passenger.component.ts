import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  State: any = ['M','F'];
  stateName: any = [];
  data: any = [{}];
  Arr = Array;
  cnt = 1;
  scheduleId: any;

  flightSchedule: any;
  user: any;
  params: any;

  constructor(private route: ActivatedRoute, private filghtService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.scheduleId = params.scheduleId;
        this.data.gender='';
      });
  }

  add() {
    this.data.push({});
    this.cnt++;
  }

  confirm() {
    console.log('passenger data ', this.data);
    this.filghtService.searchSchedule(this.scheduleId).subscribe((res: any) => {
      this.flightSchedule = res;
      this.user = this.filghtService.user;
      this.params = {
        users: this.user,
        flightSchedule: this.flightSchedule,
        passengers: this.data,
        bookingDate: '2020-05-02',
        travelDate: '2020-05-02'
      };
      this.filghtService.addBooking(this.params).subscribe((res: any) => {

        alert ('Flight Booking successful');
        console.log('booking id sending is ', res.bookingId)
        this.router.navigate(['bookingdetails'], { queryParams: {bookingID: res.bookingId}});
      })
    })
  }

}
