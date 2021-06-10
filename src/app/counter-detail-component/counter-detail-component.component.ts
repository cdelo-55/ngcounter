import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'counter',
  templateUrl: './counter-detail-component.component.html',
  styleUrls: ['./counter-detail-component.component.css']
})
export class CounterDetailComponentComponent implements OnInit {
  @Input() counter: Counter;
         
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter.value++;  
  }

  decrement(){
    if (this.counter.value > 0){
      this.counter.value--;
    }
  }
}
