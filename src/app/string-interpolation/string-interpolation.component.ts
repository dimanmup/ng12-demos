import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  seconds = 0;

  constructor() {
    setInterval(() => this.seconds++, 1000);
  }

  getMinutes(): number {
    return this.seconds / 60;
  }

  ngOnInit(): void {
  }

}
