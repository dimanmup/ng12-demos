import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-in-componental',
  templateUrl: './structural-in-componental.component.html',
  styleUrls: ['./structural-in-componental.component.css']
})
export class StructuralInComponentalComponent implements OnInit {

  items: number[] = [1, 2, 3];
  switchSelector = true;

  constructor() { }

  ngOnInit(): void {
  }

}
