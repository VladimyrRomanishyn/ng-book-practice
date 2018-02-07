
export class VoteComponent {
  private totalVotes = 0;

  get Votes(): number {
    return this.totalVotes;
  }
  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }
}
