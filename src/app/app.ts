import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

@Component({

  selector: 'app-root',
  imports: [Navbar, Hero, Home, About, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('my_first-app');
}
