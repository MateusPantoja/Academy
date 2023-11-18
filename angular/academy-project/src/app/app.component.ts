import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  standalone: false,
  imports: [CommonModule, RouterOutlet, MeuComponenteComponent, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'academy-project';
  helloWord = {
    message: 'Ola mundo !!'
  }
}
