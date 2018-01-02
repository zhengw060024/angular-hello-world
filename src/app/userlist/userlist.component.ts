import { Component, OnInit } from '@angular/core';
import * as nedb from 'nedb';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  arrayUserList: Array<string>;
  constructor() {
    this.arrayUserList = [];
    this.arrayUserList.push('Jim');
    this.arrayUserList.push('Kate');
    this.arrayUserList.push('Jane');
   }
   onSaveData() {
     console.log('zhengwei test!!!!');
    const Temp = new nedb({
      filename: 'testFile.db',
      autoload: true,
    });
    const arrayTemp = [];
    this.arrayUserList.forEach(item => {
      arrayTemp.push({
        name: item
      });
    } );
    Temp.remove({}, (err, data) => {
      Temp.insert(arrayTemp, (err2, data2) => {
        console.log('data write success');
      });
    });
  }
  ngOnInit() {
  }
}
