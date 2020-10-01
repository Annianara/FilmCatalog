import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Filminfo} from '../film-info/film-info.component';

@Component({
  selector: 'app-filmcatalog',
  templateUrl: './filmcatalog.component.html',
  styleUrls: ['../../styles_t.css']
})
export class FilmcatalogComponent implements OnInit {
  filmInfo
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.filmInfo = this.http.get('assets/films.json');
  }
}
