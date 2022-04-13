import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  text = '';

  updateText(e: Event): void {
    this.text = (<HTMLInputElement>e.target).value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
