import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1,
        name:'Izuku Midoriya',
        alias: 'Deku',
        quirk: 'One for All',
        imagePath: '/assets/images/deku.png',
        class: '1-A' },
      { id: 2,
        name: 'Bakugo Katsuki',
        alias: 'Dynamight ',
        quirk: 'Explosion',
        imagePath: '/assets/images/bakugo.png',
        class: '1-A' },
      { id: 3,
        name: 'Ochaco Uraraka',
        alias:'Uravity ',
        quirk: 'Zero Gravity ',
        imagePath: '/assets/images/uravity.png',
        class: '1-A' },
      { id: 4,
        name: 'Toshinori Yagi',
        alias: 'Allmight',
        quirk: 'One for All',
        imagePath: '/assets/images/All_Might_baraque.png',
        },
      { id: 5,
        name: 'Tsuyu Asui ',
        alias: 'Rainy Season Hero: Froppy ',
        quirk: 'Frog',
        imagePath: '/assets/images/froppy.png',
        class: '1-A'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}