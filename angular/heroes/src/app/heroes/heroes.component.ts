import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from './mocks/Hero.mock'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = []

  //  a interrogação pode ou nao recerb valor pode ser NULL ou ter algum valor
  selectedHero?: Hero

  //Para usar o servico que criei devo usar o constructor
  //Injeção de dependencias
  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  // onSelectHero(hero: Hero) {
  //   // Atributo da classe, "this" permite usar esse atributo
  //   this.selectedHero = hero;
  //   // console.log(hero)
  // }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(
      `HeroesComponent: Selected hero id ${hero.id}`);
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();

    //tota vez quefor usar observal tenho que fazer um subscribe
    //Chamar a função assincronamente
    this.heroService.getHeroesMock().subscribe(
        heroes=> this.heroes = heroes)
  }

}
