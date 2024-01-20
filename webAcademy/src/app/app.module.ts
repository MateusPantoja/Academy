import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from 'src/pages/home/home-component/home-component.component';
import { HomeService } from 'src/service/home-service/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
