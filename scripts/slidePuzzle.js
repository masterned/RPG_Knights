'use strict';

const SlidePuzzle = sideLength => {

  sideLength = sideLength || 3;
  if (sideLength < 3) {
    console.log(`Puzzle side length cannot be less than 3`);
    return;
  }

  let tiles = [];
  const getArray = _ => tiles;

  const cntNumInversions = a => summation(a.map((x, n) => cntLessThan(x, a.slice(n+1))));
  const getNumInversions = _ => cntNumInversions(array.slice(0, -1));

  const isSolvable = _ => isEven(getNumInversions()); // TODO: check accuracy

  /*
  * couldn't think of a good name (thakfully this will be a private function)
  * if the number of inversions is even, this function makes it odd and vice vera
  * the name comes from the "My Life as a Teenage Robot" episode with the Rubix cube
  * the other students cheat by swapping a couple of the stickers on the cube
  * making the cube unsolvable (much like the slide puzzle)
  * all it took was to swap the stickers back, and it was solvable again
  */
  const jenny = _ => (array = rotateLeft(array)) && array;

  const solve = _ => array.push(array.sort((a, b) => a - b).shift()) && getPuzzle();
  const isSolved = _ => equals(array.slice(0, -1), array.slice(0, -1).sort()) && array[array.length-1] === 0;

  const init = _ => {
    array = genRandSet(sideLength ** 2 - 1);
    while (getNumInversions() < 11) array.reverse();
    while (!isSolvable()) jenny();
    array.push(0);
  };
  init();

  const debug = {
    getArray,
    getNumInversions,
    isSolvable,
    jenny,
    solve
  };

  const output = {
    array: _ => tiles,
    matrix: _ => {
      let matrix = [],
      i = 0;
      for (i = 0; i < sideLength; i++) matrix.push(array.slice(sideLength*i,sideLength*i+sideLength));
      return matrix;
    },
    string: _ => {
      let string = '';
      for (let tile in tiles) {
        if (tile !== 0 && tile % sideLength === 0) string += '\n';
        string += array[tile] + '\t';
      }
      return string;
    }
  }

  const slide = {
    down: _ => {
      let empty = array.indexOf(0);
      if (empty !== -1 && empty - sideLength >= 0) {
        array[empty] = array[empty-sideLength];
        array[empty-sideLength] = 0;
        return true;
      }
      return false;
    },
    left: _ => {
      let empty = array.indexOf(0);
      if (empty !== -1 && empty % sideLength !== sideLength-1) {
        array[empty] = array[empty+1];
        array[empty+1] = 0;
        return true;
      }
      return false;
    },
    right: _ => {
      let empty = array.indexOf(0);
      if (empty !== -1 && empty % sideLength !== 0) {
        array[empty] = array[empty-1];
        array[empty-1] = 0;
        return true;
      }
      return false;
    },
    tile: (x, y) => {
      console.log('wip');
    },
    up: _ => {
      let empty = array.indexOf(0);
      if (empty !== -1 && empty < sideLength*(sideLength-1)) {
        array[empty] = array[empty+sideLength];
        array[empty+sideLength] = 0;
        return true;
      }
      return false;
    }
  }

  return {
    init,
    getPuzzle,
    toString,
    slide,
    isSolved,
    debug
  };
};
