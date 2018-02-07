
import { Component } from '@angular/core';

@Component({
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent {
  itemVotes = 20;
  myVotes = 1;
  constructor() {
  }
}
