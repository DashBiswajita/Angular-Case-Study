import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
//import { error } from 'console';
import { Student } from './student.model';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {
  rowData : Student[] = [];
  columnDefs : ColDef[] = [];
  stud : Student;
 
  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {
      this.http.get<Student[]>("../assets/studentsInfo.json").subscribe(
        (data) => {
          this.rowData = data; 
          this.columnDefs = [{}]
          Object.keys({...data[0]}).forEach((key) => {
            this.columnDefs.push({field: key, sortable: true,filter: true})
          }
            
          )
        },
        (error) => console.log(error.message),
        () => console.log("completed")
     )
  }

}
