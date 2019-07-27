import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  today
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  constructor() {
    this.today = new Date().toISOString();
  }
  onChange($event) {
    console.log($event);
  }

}
