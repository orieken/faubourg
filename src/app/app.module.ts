import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NeighborhoodsComponent } from './components/neighborhoods/neighborhoods.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NeighborhoodsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
