import { TimeAgoPipe } from './time-ago.pipe';

describe('DateTimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgoPipe();
    expect(pipe).toBeTruthy();
  });
});
