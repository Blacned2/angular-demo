import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  
  title = 'angular-demo';
  result:any;
  singleResult:any;
  constructor(private httpClient:HttpClient) {} 

  authKeywords = {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '9df24df7d0msha2610aa810197e0p17941ejsn6d16a845e4b4'
  }

  ngOnInit(): void {
      this.imdbGet();
  }

  imdbGet(){
    this.httpClient.get("https://imdb8.p.rapidapi.com/auto-complete?q=" + this.title, {
      headers: this.authKeywords
    }).subscribe(response => {
      this.result = response;
    })
  }

  movieDataGet(newResult:any){
    this.singleResult = newResult;
  }



}


