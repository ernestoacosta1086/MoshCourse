import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent implements OnInit {

  archives = [
     {year: 2017, month: 1},
     {year: 2017, month: 2},
     {year: 2017, month: 3},
  ];
  constructor() { 
  }

  ngOnInit() {
  }

}
