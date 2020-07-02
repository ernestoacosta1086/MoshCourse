import { Component, OnInit, Input } from '@angular/core';
import { BasicService } from '../services/basic.service';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent implements OnInit{
  title: string;
  isExpanded: boolean;

  constructor(private basicService: BasicService) {}
  ngOnInit(): void {
    this.title = this.basicService.getZippyTittle();
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
