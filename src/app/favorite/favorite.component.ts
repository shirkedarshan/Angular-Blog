import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isActive = true;
  starClass = false;
  constructor() { }

  clickStar(){
    this.starClass = !this.starClass;
  }

  ngOnInit(): void {
  }

}
