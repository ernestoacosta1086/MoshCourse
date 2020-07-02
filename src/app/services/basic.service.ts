import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  tweet = {
    body: '....',
    isLiked : true,
    likesCount : 10
  };

  getLikeCount(): number {
    return this.tweet.likesCount;
  }

  isLiked(): boolean {
    return this.tweet.isLiked;
  }

  getZippyTittle(): string {
    return 'Shipping details';
  }

  constructor() { }
}
