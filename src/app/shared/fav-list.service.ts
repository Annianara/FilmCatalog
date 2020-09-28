import { Injectable } from '@angular/core';
import {Filminfo} from '../film-info/film-info.component';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavListService {
  filmlist: Filminfo[] = [];
  constructor(http: HttpClient) {}

}
