import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { CardSelectedComponent } from '../card-selected/card-selected.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  
  card:any = Object;
  currentRate=8;
  readonly=true;
  @Output() movieDataEvent = new EventEmitter<any>();

  page:number=6;
  movies:MovieApiResultModels.Result[] = [];
  apiUrlWithToken = 'https://api.themoviedb.org/3/movie/66/lists?api_key=acc8a204e7a8fcf1c76cf757fe357319&language=en-US&page='+this.page+'&='
  
  ngOnInit(): void {
    this.getMovies();
  }

  getData(card:any){
    this.movieDataEvent.emit(card);

  }

  getMovies(){
    this.httpClient.get<any>(this.apiUrlWithToken).subscribe((response) =>{
      this.movies = response.results;
    })
  }


}

declare module MovieApiResultModels {
  export interface Result {
      description: string,
      favorite_count: number,
      id: number,
      item_count: number,
      iso_639_1: string,
      list_type: string,
      name: string,
      poster_path?: any,
  }
  export interface RootObject {
      id: number;
      page: number;
      results: Result[];
      total_pages: number;
      total_results: number;
  }
}