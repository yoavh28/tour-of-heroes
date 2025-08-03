import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent  {
  protected readonly title = signal('Tour of Heroes');
}