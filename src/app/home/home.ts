import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  clickCounter: number = 0;
  incrementCounter() {
    this.clickCounter++;
  }
}
