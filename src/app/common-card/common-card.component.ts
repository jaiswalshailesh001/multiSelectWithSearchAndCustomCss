import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.css']
})
export class CommonCardComponent implements OnInit , OnChanges {

  isRed = false;
  isGreen = false;
  isBlue = false;
  @Input() color = '';

  @Input() users: string[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor(this.color);
  }

  ngOnInit() {
  }

  
  clearColors() {
    this.isRed = false;
    this.isGreen = false;
    this.isBlue = false;
  }

  changeColor(color) {
    this.clearColors();
    if (color == 'red') {
      this.isRed = true;
    } else if (color == 'green') {
      this.isGreen = true;
    } else if (color == 'blue') {
      this.isBlue = true;
    }
  }
}
