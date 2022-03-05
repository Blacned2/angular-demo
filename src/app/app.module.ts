//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardSelectedComponent } from './card-selected/card-selected.component';
import { CategoryComponent } from './category/category.component';
import { SelectedMovieComponent } from './movies/selected-movie/selected-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    CardSelectedComponent,
    CategoryComponent,
    SelectedMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    NgbModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})


export class AppModule { }
