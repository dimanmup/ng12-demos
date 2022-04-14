import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  username = '';
  country = 'Russia';
  city = 'Saransk';

  constructor() { }

  ngOnInit(): void {
  }

  updateUsername(e: Event) {
    this.username = (e.target as HTMLInputElement).value;
  }

  writeJohn() {
    this.username = 'John';
  }
}
