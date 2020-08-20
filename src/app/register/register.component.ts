import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  State: any = ['M','F'];
  stateName: any = [];
  data: any = {};

  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.data.gender='';
  }
  changeState(e) {
    this.stateName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  submit() {
    if (!this.data.username) {
      alert("username cannot be null")
    } else if (this.data.password!=this.data.confirm) {
        alert("password mismatch")
      } else if (!this.data.name) {
        alert("name cannot be null") 
    } else if (!this.data.phone) {
          alert("phone number cannot be null")     
    } else if (!this.data.email) {
          alert("email cannot be null")          
    } 
    else {
      let options = {
        params: this.data
      }
      this.flightService.createUser(options.params).subscribe ((res: any) => {
        this.router.navigate(['/login']);
      });
    }
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-img');
  }

}
