import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {
  hunger: number;
  happiness: number;
  data: any;

   constructor(private apiService: ApiService) {
   }

   public ngOnInit(): void {
    this.apiService.getData()
      .subscribe((data: any): void => {
        this.data = data;
        console.log(data);
      });
  }

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
      this.apiService.updateHappiness(this.data.happiness);
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
