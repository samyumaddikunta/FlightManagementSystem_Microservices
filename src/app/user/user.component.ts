import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private flightService: FlightService) { }


  ngOnInit(): void {
  }
  viewbookings()
  {
  this.router.navigate(['/viewbookings']);
  }
}
