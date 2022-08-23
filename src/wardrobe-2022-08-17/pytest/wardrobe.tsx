const SHELVES = [50, 75, 100, 120];

const wardrobe = (width: number) => {
  let output: Array<Array<number>> = [];

  SHELVES.filter((x) => x <= width).map((w) => {
    if (width % w == 0) {
      const numShelves = width / w;
      const newArray = Array(numShelves).fill(w);
      output.push(newArray);
    } else if (SHELVES.filter((x) => x !== w).includes(width % w)) {
      const numShelves = Math.floor(width / w);
      const remainder = width % w;
      let newArray = Array(numShelves).fill(w);
      newArray = newArray.concat(remainder);
      output.push(newArray.sort());
    }
  });
  return output;
};

export default wardrobe;
