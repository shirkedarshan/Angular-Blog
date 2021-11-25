import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  @Input() isFavorite = false;
  @Output() change = new EventEmitter();
  constructor() { }

  clickStar(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
  
  ngOnInit(): void {
  }

}
