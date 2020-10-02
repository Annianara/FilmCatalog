import {Component, OnInit} from '@angular/core';
import {Filminfo} from "../film-info/film-info.component";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['../../styles_t.css']
})
export class FavoritesComponent implements OnInit {
  constructor() {
  }

  favList
  totalsum = 0

  ngOnInit(): void {
    this.favList = Object.values(localStorage).map(f => <Filminfo>JSON.parse(f))
    this.calc_sum()

  }

  remove_item(film) {
    localStorage.removeItem(film.id)
    this.favList = Object.values(localStorage).map(f => <Filminfo>JSON.parse(f))
    this.calc_sum()
  }

  remove_all()
  {
    localStorage.clear()
    this.favList = Object.values(localStorage).map(f => <Filminfo>JSON.parse(f))
    this.calc_sum()
  }

  calc_sum() {
    this.totalsum = this.favList.reduce((sum, cur) => sum + cur.price, 0)
  }
}
