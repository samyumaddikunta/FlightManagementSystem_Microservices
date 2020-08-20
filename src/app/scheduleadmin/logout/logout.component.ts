import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public flightservice: FlightService, public router: Router) { }
  ngOnInit(): void {
    this.flightservice.logOut();
    this.router.navigate(['/login']);
  }

}
