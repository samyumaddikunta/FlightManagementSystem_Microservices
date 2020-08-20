import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faEye,faAlignJustify} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scheduleadmin',
  templateUrl: './scheduleadmin.component.html',
  styleUrls: ['./scheduleadmin.component.css']
})
export class ScheduleadminComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  faAlignJustify= faAlignJustify;
  showAdd = false;
  showSearch = true;
  showUpdate = false;

  constructor() { }

  ngOnInit(): void {
  }

}
