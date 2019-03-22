import { Component } from '@angular/core';
import{StudentsService}from './students.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
  list;
  constructor(ss:StudentsService){
    this.list=ss.getStudents();
    ss.addStudents({name: 'Anand'});
  }
  
}
