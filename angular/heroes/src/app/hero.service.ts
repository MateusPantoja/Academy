import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/Hero.mock';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES
  }
}
