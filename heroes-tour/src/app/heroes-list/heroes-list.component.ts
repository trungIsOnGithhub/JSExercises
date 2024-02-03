import { Component } from '@angular/core';

import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  hero_list : Hero[] = [
    {
      id: 1,
      name: 'Huan Hoa Hong'
    },
    {
      id: 2,
      name: 'Kha Banh'
    }
  ];
}
