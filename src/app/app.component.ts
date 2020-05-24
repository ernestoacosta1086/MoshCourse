import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySolution';

  tweet = {
    body: '....',
    isLiked : true,
    likesCount : 10
  }
}
