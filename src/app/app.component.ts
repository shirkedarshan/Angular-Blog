import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  onFavoriteChange(){
    console.log("Favourite changed");
  }


  post= {
    title : "Title",
    isFavorite : false
  }
}
