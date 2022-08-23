import wardrobe from '../pytest/wardrobe';

describe('wardrobe', () => {
  it('returns [[50]] given length 50', () => {
    const input = 50;
    const expected = [[50]];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });

  it('returns [[50, 50], [100]] given length 100', () => {
    const input = 100;
    const expected = [[50, 50], [100]];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });
});
