import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  
  @Input() hero?: Hero //input indica que hero ta herdando de outro componente

  ngOnInit(): void {
    
  }
}
