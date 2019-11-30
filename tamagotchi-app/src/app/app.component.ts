import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tamagotchi++';

  hunger = 0;
  happiness = 0;
  age = 0;
}
