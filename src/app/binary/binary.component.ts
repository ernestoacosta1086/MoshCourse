import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.css'],
})
export class BinaryComponent implements OnInit {
  value: string;

  getDecimalValue() {
    return Number.parseInt(this.value, 2);
  }
  constructor() {}

  ngOnInit() {}
}
