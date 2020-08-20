import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-flight-admin',
  templateUrl: './flight-admin.component.html',
  styleUrls: ['./flight-admin.component.css']
})
export class FlightAdminComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  showAdd = false;
  showSearch = true;
  showUpdate = false;

  constructor() { }

  ngOnInit(): void {
  }

}
