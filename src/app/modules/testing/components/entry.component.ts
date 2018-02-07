
import { Component } from '@angular/core';
import { compute } from '../functions/01-fundamentals/compute';

@Component({
  template: `<h1>Testing Component Entry</h1>`,
  styles: [`h1{color: lightseagreen}`]
})

export class EntryComponent {
  constructor() {
    console.log(compute(-1));
  }
}
