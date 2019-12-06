import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  hunger = 0;
  happiness = 0;
  age = 0;

  constructor() { }

  ngOnInit() {
  }

}
