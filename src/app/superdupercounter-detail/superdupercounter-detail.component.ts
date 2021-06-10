import { Component, Input, OnInit } from '@angular/core';
import { Superdupercounter } from '../superdupercounter';

@Component({
  selector: 'superdupercounter',
  templateUrl: './superdupercounter-detail.component.html',
  styleUrls: ['./superdupercounter-detail.component.css']
})
export class SuperdupercounterDetailComponent implements OnInit {
  @Input() superdupercounter: Superdupercounter;

  constructor() { }

  ngOnInit(): void {
  }
  dupincrement(){
    this.superdupercounter.value+= 3;
  }

  dupdecrement(){
    if (this.superdupercounter.value >= 3){
      this.superdupercounter.value-= 3;
    }
  }
}
