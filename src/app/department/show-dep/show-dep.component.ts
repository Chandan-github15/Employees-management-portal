import { Component, OnInit } from '@angular/core';

import { MatTableDataSource }  from '@angular/Material/table';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor() { }
  

  listdata : MatTableDataSource<any>;
  displayedColumns : string[] =['option','DepartmentID','DepartmentName']

  ngOnInit(): void {

  var dummydata=[{DepartmentID:1, DepartmentName:"IT"}]

  }

}


