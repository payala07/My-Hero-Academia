import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';


@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
