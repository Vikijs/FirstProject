import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
list;
  constructor(s:StudentsService) { 
    this.list=s.getStudents();
  }

  ngOnInit() {
  }

}
