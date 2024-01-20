import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/service/home-service/home.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(
    private homeService: HomeService) { }

  ngOnInit() {
  }


}
