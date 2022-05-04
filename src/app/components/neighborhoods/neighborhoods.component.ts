import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-neighborhoods',
  templateUrl: './neighborhoods.component.html',
  styleUrls: ['./neighborhoods.component.css']
})
export class NeighborhoodsComponent implements OnInit {
  neighborhoods$!: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.neighborhoods$ = of([
      {
        name: 'Marigny',
        image: 'assets/marigny.jpg',
      },
      {
        name: 'Vieux Carre',
        image: 'assets/vieux-carre.jpg',
      },
      {
        name: 'Freret',
        image: 'assets/freret.jpg',
      },
      {
        name: 'Carrollton',
        image: 'assets/carrollton.jpg',
      },
    ])
  }
}
