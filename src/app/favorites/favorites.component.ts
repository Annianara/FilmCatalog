import { Component, OnInit } from '@angular/core';
import {FavListService} from "../shared/fav-list.service";
import {Filminfo} from "../film-info/film-info.component";
import {Subject} from "rxjs";


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  localStorageChange = new Subject()

  constructor(private favListService: FavListService) {

  }

  favList: Filminfo[]
  favListString
  favListStream
  //favList = this.favList
  //Service.filmlist
  ngOnInit(): void {

    // var retrievedObject = localStorage.getItem('testObject');
    // retrievedObject.map(f=>JSON.parse(f))
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));


     this.favListString = Object.values(localStorage)
 //   localStorage.clear()
    console.log(this.favListString)
    this.favList = this.favListString.map(f => <Filminfo>JSON.parse(f))
//    this.localStorageChange.next()
 //   this.favListStream = this.localStorageChange.subscribe(this.favListStream)
    // for (let k of this.favList)
    // {console}
    // console.log("Должно быть распаршено"+this.favList)

  // this.favList = JSON.parse(this.favList)

  }

  remove_item(film)
  {
    localStorage.removeItem(film.name)
    this.favList = Object.values(localStorage).map(f => <Filminfo>JSON.parse(f))


 //   this.localStorageChange.next(localStorage)

  }

}
