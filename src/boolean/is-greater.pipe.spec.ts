import { IsGreaterPipe } from './is-greater.pipe';

describe('IsGreaterPipe', () => {
  let pipe: IsGreaterPipe;

  beforeEach(() => {
    pipe = new IsGreaterPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(3, 2)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1, 2)).toEqual(false);
  });

  it('Should return false #2', () => {
    expect(pipe.transform(1, 1)).toEqual(false);
  });
});
