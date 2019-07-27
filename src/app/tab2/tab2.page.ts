import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  today
  public currentNumber = 1;
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  constructor() {
    this.today = new Date().toISOString();
  }
  public increment() {
    if(this.currentNumber<13){
      this.currentNumber++;
    }
  }
  
  public decrement() {
    if(this.currentNumber>1){
      this.currentNumber--;
    }
  }

}
