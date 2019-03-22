import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  list =new Array();
  constructor() {
   }
   getStudents()
   {
     return this.list;
   }
   addStudents(Sl){
this.list.push(Sl);
   }
}
