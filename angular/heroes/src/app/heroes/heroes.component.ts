import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from './mocks/Hero.mock'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
 heroes: Hero[] = []

 //  a interrogação pode ou nçao recerb valor pode ser NULL ou ter algum valor
 selectedHero?: Hero 

 //Para usar o servico que criei devo usar o constructor
 constructor(private heroService: HeroService) {}

ngOnInit(): void {
  this.getHeroes()
}

onSelectHero(hero: Hero) {
  // Atributo da classe, "this" permite usar esse atributo
  this.selectedHero = hero;
  console.log(hero)
}

getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

}
