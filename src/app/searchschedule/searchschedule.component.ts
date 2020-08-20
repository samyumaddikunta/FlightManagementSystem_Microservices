import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../flight.service';
import { faSearch, faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchschedule',
  templateUrl: './searchschedule.component.html',
  styleUrls: ['./searchschedule.component.css']
})
export class SearchscheduleComponent implements OnInit {
  faSearch = faSearch;
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  scheduleData: any = [];
  data: any = {};
  @Output() updateSchedule: EventEmitter<any> = new EventEmitter();

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.getAllSchedules();
  }
  getAllSchedules() {
    this.flightService.getAllSchedules().subscribe((res: any) => {
      this.scheduleData = res;
    })
  }

  searchSchedule() {
    this.flightService.searchSchedule(this.data.scheduleId).subscribe((res: any) => {
      let sched: any = [];
      sched[0] = res;
      this.scheduleData = sched;
      alert("Flight Schedule is available");
    },
    (error) => { 
      alert("Flight Schedule is not available");
    })
  }

  delete(scheduleID) {
    this.flightService.deleteSchedule(scheduleID).subscribe((res: any) => {
      alert('Schedule delete successfully');
      this.getAllSchedules();
    })
  }

  update(schedule)
  {
    console.log('emitting from search schedule');
    this.updateSchedule.emit(schedule);
  }
}
