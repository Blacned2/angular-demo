import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-selected',
  templateUrl: './card-selected.component.html',
  styleUrls: ['./card-selected.component.css']
})
export class CardSelectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() veri:any;
  

}
