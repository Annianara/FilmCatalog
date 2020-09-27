import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmcatalogComponent } from './filmcatalog/filmcatalog.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmInfoComponent } from './film-info/film-info.component';
import {QuillModule} from "ngx-quill";
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    FilmcatalogComponent,
    FavoritesComponent,
    FilmInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuillModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
