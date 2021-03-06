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
  styleUrls: ['../../styles_t.css']
})
export class FilmInfoComponent implements OnInit {
  @Input() film;
  isClicked = false;

  constructor() {
  }

  ngOnInit(): void {
    if (Object.keys(localStorage).includes(this.film.id)) {
      this.isClicked = true
    } else this.isClicked = false
  }

  add_to_favourites(film) {
    if (this.isClicked) {
      localStorage.removeItem(film.id)
    } else {
      localStorage.setItem(film.id, JSON.stringify(film))
      // console.log(localStorage.getItem(film.name))
    }
    this.isClicked = !this.isClicked
  }
}
