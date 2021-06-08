import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name: string = 'Counter Wall';
  counters:Counter[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  create(){
    let newCount: Counter = new Counter();
    this.counters.push(newCount);
  }

}
