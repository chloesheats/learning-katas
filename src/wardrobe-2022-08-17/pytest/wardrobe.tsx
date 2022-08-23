const SHELVES = [50, 75, 100, 120];

const wardrobe = (width: number) => {
  let output: Array<Array<number>> = [];
  SHELVES.map((w) => {
    if (width % w == 0) {
      const numShelves = width / w;
      console.log(`num shelves:  `, numShelves);
      const newArray = Array(numShelves).fill(w);
      console.log(`new array:  `, newArray);
      output.push(newArray);
      console.log(`current output:  `, output);
    }
  });
  return output;
};

export default wardrobe;
