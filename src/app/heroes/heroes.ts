import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class HeroesComponent  {
  @Input() title!: string;
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}