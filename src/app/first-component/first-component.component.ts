import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  list;
  constructor(s:StudentsService) { 
    s.addStudents({name:"Viki"});
    this.list=s.getStudents();
  }

  ngOnInit() {
  }

}
