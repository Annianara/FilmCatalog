import {Component, Input, OnInit} from '@angular/core';
import {FavListService} from "../shared/fav-list.service";


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
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {
  @Input() film;
  isClicked = false;

  constructor(private favlist: FavListService) {
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
      // localStorage.setItem('testObject', JSON.stringify(film))
      localStorage.setItem(film.name, JSON.stringify(film))
      console.log(localStorage.getItem(film.name))


      let k = localStorage.getItem(film.name)
      // for (let m of Object.values(k))
      //   console.log(m)
      this.favlist.filmlist.push(film)
    }
    this.isClicked = !this.isClicked

  }
}
