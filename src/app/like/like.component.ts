import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked : any;
  @Input() likesCount = 0;

  clickLike(){
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
