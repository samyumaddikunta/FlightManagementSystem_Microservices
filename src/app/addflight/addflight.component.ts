import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  
  data: any = {};
  //flightData: any = {};
  constructor(private router:Router,private flightService: FlightService) { }

  ngOnInit(): void {
  }

  addFlight() {
    console.log("hi.....")
    this.flightService.addFlight(this.data).subscribe((res: any) => {
      //this.data=res;
      alert("Flight added");
    },
    (error) => {
      alert("Flight");
    })
    //this.router.navigate(['/admin']);
  }

}
