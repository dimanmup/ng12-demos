import { Component, OnInit } from '@angular/core';

class Person {
  constructor(public name: string, public age: number) {}
}

@Component({
  selector: 'app-directives-built-in-structural',
  templateUrl: './directives-built-in-structural.component.html',
  styleUrls: ['./directives-built-in-structural.component.css']
})
export class DirectivesBuiltInStructuralComponent implements OnInit {

  persons:  Person[] = [
    new Person('Vasya', 22),
    new Person('Tanya', 33),
    new Person('Lena', 21),
    new Person('Kolya', 29),
    new Person('Katya', 23),
    new Person('Vova', 27),
  ];
  httpStatusCode = 401;

  constructor() { }

  ngOnInit(): void {
  }

}
