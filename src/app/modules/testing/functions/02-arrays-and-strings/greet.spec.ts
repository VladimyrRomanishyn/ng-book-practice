import { greet } from './greet';

describe('Greet', () => {
  let result;

  it('Should contain Vladimir', () => {
    const name = 'Vladimir';
    result = greet(name);
    expect(result).toContain(name);
  });
});
