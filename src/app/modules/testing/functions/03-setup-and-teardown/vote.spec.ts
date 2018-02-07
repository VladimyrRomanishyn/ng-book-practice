


import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  it('Should return 0', () => {
    expect(voteComponent.Votes).toBe(0);
  });

  it('Should increment Votes', () => {
    voteComponent.upVote();
    expect(voteComponent.Votes).toBe(1);
  });

  it('Should decrement Votes', () => {
    voteComponent.downVote();
    expect(voteComponent.Votes).toBe(-1);
  });
});
