import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { Supercounter } from '../supercounter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name: string = 'Counter Wall';
  counters:Counter[] = [];
  supercounters: Supercounter[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  create(){
    let newCount: Counter = new Counter();
    let newsupCnt: Supercounter = new Supercounter();
     
    if (this.counters.length < 5) {
      this.counters.push(newCount);
    } else {    
      for (let cnt = this.counters.length - 1; cnt >= 0; cnt--) {
        newsupCnt.value += this.counters[cnt].value;
        this.counters.pop();
      } 
      //console.log(this.supercounters.values); 
      this.supercounters.push(newsupCnt);
      console.log(this.supercounters[0].value);
    }
  }
}
