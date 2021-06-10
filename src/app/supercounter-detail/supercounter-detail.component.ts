import { Component, Input, OnInit } from '@angular/core';
import { Supercounter } from '../supercounter';

@Component({
  selector: 'supercounter',
  templateUrl: './supercounter-detail.component.html',
  styleUrls: ['./supercounter-detail.component.css']
})
export class SupercounterDetailComponent implements OnInit {
  @Input() supercounter: Supercounter;
      
  constructor() { }

  ngOnInit(): void {
  }

  supincrement(){
    this.supercounter.value+= 3;
  }

  supdecrement(){
    if (this.supercounter.value >= 3){
      this.supercounter.value-= 3;
    }
  }
}

