import { Component, OnInit } from '@angular/core';
import { Strategy } from '../strategy';
import { STRATS } from '../mock-strats';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {
	strats = STRATS;
  constructor() { }

  ngOnInit() {
  }

  selectedStrat: Strategy;

onSelect(strat: Strategy): void {
  this.selectedStrat = strat;
  alert('ok');
}


}
