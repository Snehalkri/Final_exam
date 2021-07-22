import { Component } from '@angular/core';
import * as XLXS from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'proj';
  fileName='student.xlsx';
  student:any;
  students = [
    {
      name:"Snehal Kumari",
      email:"sne@gmail.com",
      roll:"1",
      totalmarks:"120"
    },
    {
      name:"Riya",
      email:"riya@gmail1.com",
      roll:"2",
      totalmarks:"160"
    },
    {
      name:"Priya",
      email:"priya@gmail1.com",
      roll:"3",
      totalmarks:"180"
    }
  ]
  constructor(){
    this.getData();
  }

  getData(){
    this.student = this.students;
  }
  excelExport(){
    let table = document.getElementById('stu');
    const ws:XLXS.WorkSheet = XLXS.utils.table_to_sheet(table);
    const wb:XLXS.WorkBook = XLXS.utils.book_new();
    XLXS.utils.book_append_sheet(wb,ws);

    XLXS.writeFile(wb,this.fileName);

    
  }

}
