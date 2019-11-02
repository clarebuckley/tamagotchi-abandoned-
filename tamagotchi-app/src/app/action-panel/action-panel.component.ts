import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {
  hunger: number;
  happiness: number;

  constructor() {
    this.hunger = 50; //take this from db
    this.happiness = 50; //take this from db
  }

  ngOnInit() {
  }

  feed(){
    if(this.hunger < 100){
      this.hunger++;
    } else {
      //make the tamagotchi fat
    }
  }

  praise(){
    if(this.happiness < 100){
      this.happiness++;
    }
  }

  play(){
    if(this.happiness < 100){
      this.happiness++;
    }
  }

  scold(){
    if(this.happiness > 0){
      this.happiness--;
    }
  }

}
