import { wardrobe, findCheapest } from '../pytest/wardrobe';

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

  it('returns [[50, 50, 50, 50], [50, 75, 75], [100, 100], [50, 50, 100]] given length 200', () => {
    const input = 200;
    const expected = [
      [50, 50, 50, 50],
      [50, 75, 75],
      [100, 100],
      [50, 50, 100],
    ];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });

  it.skip('returns [[50, 50, 50, 50, 50], [50, 50, 75, 75], [50, 100, 100]] given length 250', () => {
    const input = 250;
    const expected = [
      [50, 50, 50, 50, 50],
      [50, 50, 75, 75],
      [50, 100, 100],
    ];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });

  it.skip('returns [] given length 260, as nothing fits exactly in it', () => {
    const input = 260;
    const expected: any[] = [];
    const actual = wardrobe(input);
    expect(actual).toEqual(expected);
  });
});

// describe('findCheapest', () => {
//   it('returns [50] given length 50', () => {
//     const wallLength = 50;
//     const shelfOptions = wardrobe(wallLength);
//     const actual = findCheapest(shelfOptions);
//     const expected = [50];
//     expect(actual).toEqual(expected);
//   });

//   it('returns [50, 100, 100] given length 250', () => {
//     const wallLength = 250;
//     const shelfOptions = wardrobe(wallLength);
//     const actual = findCheapest(shelfOptions);
//     const expected = [50, 100, 100];
//     expect(actual).toEqual(expected);
//   });
// });
