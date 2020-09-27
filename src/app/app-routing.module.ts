import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmcatalogComponent} from "./filmcatalog/filmcatalog.component";
import {FavoritesComponent} from "./favorites/favorites.component";



const routes: Routes = [
  {path: 'catalog', component: FilmcatalogComponent},
  {path: '', component: FilmcatalogComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '**', component: FilmcatalogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

