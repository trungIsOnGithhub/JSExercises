import { Component } from '@angular/core';

import { Hero } from '../models/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  hero_list : Hero[] = [
    {
      id: 1,
      age: 69,
      name: 'Huan Hoa Hong'
    },
    {
      id: 2,
      age: 96,
      name: 'Kha Banh'
    }
  ];

  selected_hero : Hero = this.hero_list[0];
}
