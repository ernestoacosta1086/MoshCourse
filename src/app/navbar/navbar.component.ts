import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tweet = {
    body: '....',
    isLiked : true,
    likesCount : 10
  };
  constructor() { }

  ngOnInit() {
  }

}
