import {Component, Input, OnInit} from '@angular/core';


export interface Filminfo {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}


@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['../favorites/favorites.component.css']
})
export class FilmInfoComponent implements OnInit {
  @Input() film;
  isClicked = false;

  constructor() {
  }
  ngOnInit(): void {
    if(Object.keys(localStorage).includes(this.film.name))
    {
      this.isClicked = true
    }
    else this.isClicked = false
  }

  add_to_favourites(film) {
    if (this.isClicked) {
      localStorage.removeItem(film.name)
    } else {
      localStorage.setItem(film.name, JSON.stringify(film))
      console.log(localStorage.getItem(film.name))
    }
    this.isClicked = !this.isClicked

  }
}
