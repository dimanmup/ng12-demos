import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-class',
  templateUrl: './attr-class.component.html',
  styleUrls: ['./attr-class.component.css']
})
export class AttrClassComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  inc(i: number): void {
    this.count += i;
  }

}
