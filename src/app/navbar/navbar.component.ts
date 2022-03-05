import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // @Input() searchInput:any;

  authKeywords = {
    'x-rapidapihost': 'weatherbit-v1-mashape.p.rapidapi.com',
    'x-rapidapi-key': '9df24df7d0msha2610aa810197e0p17941ejsn6d16a845e4b4'
  }

  searchString = '';
  result:any;
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
  }

  onClicked(){
    console.log(this.searchString);
    this.getTheSearchResult();
    // console.log(this.searchInput)
  }


  

  getTheSearchResult() {
    this.httpClient.get("https://imdb8.p.rapidapi.com/auto-complete?q=" + this.searchString, {
      headers: this.authKeywords
    }).subscribe(response => {
      this.result = response;
      console.log(this.result);
    })
  }
}
