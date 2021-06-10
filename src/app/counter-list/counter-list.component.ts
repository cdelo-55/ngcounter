import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { Supercounter } from '../supercounter';
import { Superdupercounter } from '../superdupercounter';


@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name: string = 'Counter Wall';
  counters:Counter[] = [];
  supercounters: Supercounter[] = [];
  superdupercounters: Superdupercounter [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  create(){
    let newCount: Counter = new Counter();
    let newsupCnt: Supercounter = new Supercounter();
    let newdupCnt: Superdupercounter = new Superdupercounter();
    
    if (this.counters.length < 5) {
      this.counters.push(newCount);
    } else {    
        // need to add the 5 counters and init super cnt to it
        for (let cnt = this.counters.length - 1; cnt >= 0; cnt--) {
        newsupCnt.value += this.counters[cnt].value;
        this.counters.pop();
        } 
        if (this.supercounters.length < 2) {
          this.supercounters.push(newsupCnt);
          
        } else {
          this.supercounters.push(newsupCnt);
          // need to add the 5 counters + the 2 supers
          // and init duper cnt to it
          for (let dupcnt = this.supercounters.length - 1; 
                    dupcnt >= 0; dupcnt--) {
            newdupCnt.value += this.supercounters[dupcnt].value;
            this.supercounters.pop();           
          } 
          this.superdupercounters.push(newdupCnt);
        }
    }
  }
}
