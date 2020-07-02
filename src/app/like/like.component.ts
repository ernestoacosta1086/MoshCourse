import { Component, OnInit, Input } from '@angular/core';
import { BasicService } from '../services/basic.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit{
  // @Input() likesCount: number;
  // @Input() isActive: boolean;

  likesCount: number;
  isActive: boolean;

  constructor(private basicService: BasicService) {}
  ngOnInit(): void {
    this.likesCount = this.basicService.getLikeCount();
    this.isActive = this.basicService.isLiked();
  }

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
