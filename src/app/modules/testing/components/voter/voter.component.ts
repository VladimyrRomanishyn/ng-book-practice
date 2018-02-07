import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent  {
  @Input() itemVotes: number;
  @Input() myVotes: number;

  get totalVotes(): number {
    return this.myVotes + this.itemVotes;
  }
  increase(): void {
    this.itemVotes++;
  }

  decrease(): void {
    this.itemVotes--;
  }
}
