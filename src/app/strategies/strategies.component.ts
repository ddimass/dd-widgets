import { Component, OnInit } from '@angular/core';
import { Strategy } from '../strategy';
import { StratService } from '../strat.service';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {
	strats: Strategy[];
	hid = false;
  constructor(private stratService: StratService) { }

  ngOnInit() {
  	this.getStrats();
  }

  selectedStrat: Strategy;

onSelect(strat: Strategy): void {
  this.selectedStrat = strat;
  this.hid = true;
}
onClose(): void {
  this.selectedStrat = new Strategy;
  this.hid = false;
}

getStrats(): void {
      this.stratService.getStrats()
      .subscribe(strats => this.strats = strats);
}

}
