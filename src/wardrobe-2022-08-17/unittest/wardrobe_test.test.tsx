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

  it('returns [[50, 75]] given length 125', () => {
    const input = 125;
    const expected = [[50, 75]];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });

  it('returns [[50, 50, 50, 50, 50], [50, 50, 75, 75], [50, 100, 100]] given length 250', () => {
    const input = 200;
    const expected = [
      [50, 50, 50, 50],
      [50, 75, 75],
      [100, 100],
    ];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });

  it('returns [] given length 260, as nothing fits exactly in it', () => {
    const input = 260;
    const expected: any[] = [];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });
});
