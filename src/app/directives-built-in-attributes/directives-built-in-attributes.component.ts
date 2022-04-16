import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-built-in-attributes',
  templateUrl: './directives-built-in-attributes.component.html',
  styleUrls: ['./directives-built-in-attributes.component.css']
})
export class DirectivesBuiltInAttributesComponent implements OnInit {

  classes: Record<string, boolean> = {};
  styles: Record<string, string> = {};

  constructor() { }

  ngOnInit(): void {
    this.classes = {
      red: true,
      bold: true,
      selected: true
    }

    this.styles = {
      'font-size': this.classes['red']  ? '1.2em' : '1em',
      'background-color': this.classes['selected']  ? 'yellow' : 'unset',
    }
  }

}
