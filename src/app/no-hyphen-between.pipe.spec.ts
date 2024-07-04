import { NoHyphenBetweenPipe } from './no-hyphen-between.pipe';

describe('NoHyphenBetweenPipe', () => {
  it('create an instance', () => {
    const pipe = new NoHyphenBetweenPipe();
    expect(pipe).toBeTruthy();
  });
});
