const SHELVES = [50, 75, 100, 120];
type Shelf = 50 | 75 | 100 | 120;
const PRICES = {
  50: 59,
  75: 75,
  100: 90,
  120: 111,
};

export const wardrobe = (width: number): Shelf[][] | [] => {
  const output: Shelf[][] = [];

  const possibleShelfA = SHELVES.filter((x) => x <= width);

  // check through all shelves less than or equal to the width
  possibleShelfA.map((shelfA) => {
    console.log(`shelfOne: `, shelfA);

    const remainderA = width % shelfA;
    const maximumA = Math.floor(width / shelfA);
    const arrayA = Array(maximumA).fill(shelfA);

    // check if there is no remainder
    if (remainderA === 0) {
      output.push(arrayA);

      // get case of [100, 100]
      if (shelfA === 100 && maximumA === 2) {
        const specialCase: Shelf[] = [50, 50, 100];
        output.push(specialCase);
      }
    }

    // check if there is a remainder
    const possibleShelfB = possibleShelfA.filter(
      (x) => x !== shelfA && x <= remainderA && x % remainderA === 0,
    );
    possibleShelfB.filter((shelfB) => {
      const numShelvesB = remainderA / shelfB;
      const arrayB = Array(numShelvesB).fill(shelfB);
      const arrayAB = arrayA.concat(arrayB);
      output.push(arrayAB.sort());
    });

    // check if there is no remainder but it is 100
  });

  console.log(`output: `, output);
  return output;
};

const sumArray = (input: Array<number>) => {
  const sum = input.reduce((a, b) => a + b, 0);
  return sum;
};

const lengthRemaining = (width: number, inputArray: Array<number>) =>
  width - sumArray(inputArray);

const findArrayThatSumsTo = (target: number) => {
  if (target === 50) {
    return [50];
  }
  if (target === 75) {
    return [75];
  }
};

export const findCheapest = (options: Array<Array<Shelf>>): Array<Shelf> => {
  let cheapestPrice: number;
  let cheapestOption: Array<Shelf>;
  options.map((currentOption, index) => {
    if (index === 0) {
      cheapestPrice = sumPrice(currentOption);
      cheapestOption = currentOption;
    } else {
      const currentPrice = sumPrice(currentOption);
      if (currentPrice < cheapestPrice) {
        cheapestPrice = currentPrice;
        cheapestOption = currentOption;
      }
    }
  });
  console.log(`cheapestPrice: `, cheapestPrice);
  return cheapestOption;
};

const sumPrice = (option: Array<Shelf>): number => {
  let totalPrice = 0;
  option.map((width) => (totalPrice += PRICES[width]));
  console.log(`option: `, option);
  console.log(`totalPrice: `, totalPrice);
  return totalPrice;
};

/*

    const quantityA = Math.floor(width / shelfA);
    const remainderA = width % shelfA;
    const arrayA = Array(quantityA).fill(shelfA);
    let currentArray = arrayA;
    console.log(
      `\n quantityA: `,
      quantityA,
      `\n remainderA: `,
      remainderA,
      `\n currentArray: `,
      currentArray,
    );

    if (remainderA === 0) {
      console.log(`newArray: `, currentArray);
      output.push(currentArray);
    } else {
      // get the other shelves that are smaller than the remainder
      const possibleShelfB = possibleShelves.filter(
        (x) => x <= remainderA && x !== shelfA,
      );
      console.log(`possibleShelfB: `, possibleShelfB);
      possibleShelfB.map((shelfB) => {
        const quantityB = Math.floor(remainderA / shelfB);
        const remainderB = remainderA % shelfB;
        const arrayB = Array(quantityB).fill(shelfB);
        currentArray = currentArray.concat(arrayB);

        console.log(
          `\n quantityB: `,
          quantityB,
          `\n remainderB: `,
          remainderB,
          `\n currentArray: `,
          currentArray,
        );

        if (remainderB === 0) {
          console.log(`newArray: `, currentArray);
          output.push(currentArray);
        }
        // else {
        //   const possibleShelfC = possibleShelfB.filter(
        //     (x) => x <= remainderB && x !== shelfB,
        //   );
        //   possibleShelfC.map(shelfC => {
        //     const quantityC = Math.floor(remainderB / shelfC);
        //     const remainderC = remainderB % shelfC;
        //     const arrayC = Array(quantityC).fill(shelfC)
        //     const curretn
        //   })
        // }
      });
    }

    */

/*
    // check for combinations of the same number
    if (width % shelfA === 0) {
      const numShelves = width / shelfA;
      const newArray = Array(numShelves).fill(shelfA);
      console.log(`newArray: `, newArray);
      output.push(newArray);
    }

    // check for combinations of the same number plus one other number
    else if (possibleShelves.filter((x) => x !== w).includes(width % w)) {
      const numShelves = Math.floor(width / w);
      const remainder = width % w;
      let newArray = Array(numShelves).fill(w);
      newArray = newArray.concat(remainder);
      console.log(`newArray: `, newArray);
      output.push(newArray.sort());
    }
    */
