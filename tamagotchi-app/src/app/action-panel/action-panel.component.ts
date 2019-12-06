import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent {
  hunger: number;
  happiness: number;
  data: any;

  feed(){
    if(this.data.hunger > 0){
      this.data.hunger--;
    } else {
      //make the tamagotchi fat
    }
  }

  praise(){
    if(this.data.happiness < 100){
      this.data.happiness++;
    }
  }

  play(){
    if(this.data.happiness < 100){
      this.data.happiness++;
    }
  }

  scold(){
    if(this.data.happiness > 0){
      this.data.happiness--;
    }
  }


}
