import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/Hero.mock';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Criou o serviço para retorno dos valores das simulaçoes
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}


  // getHeroes(): Hero[] {
  //   return HEROES
  // }

  //
  getHeroesMock(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero Service: fetched heroes");
    return heroes
  }

}
