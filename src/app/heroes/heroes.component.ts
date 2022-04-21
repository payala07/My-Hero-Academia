import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Deku',
    quirk: 'One for All',
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/d/db/Izuku_Midoriya_%28My_Hero_Academia_character%29.png',
    class: '1A'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
