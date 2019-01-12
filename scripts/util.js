'use strict';

// push :: (Array, Value) -> Array
const push = (a, x) => a.push(x) && a;

// range :: (Number, Number) -> Array
const range = (n, m) =>
  m === undefined
  ? range(1, n)
  : n === m
    ? [m]
    : n < m
      ? push(range(n, m-1), m)
      : push(range(n, m+1), m);

const genRandSet = n => range(n).sort(_ => 0.5 - Math.random());

// is there a more terse solution?
const genRandLetters = num => {
  let in_set = 'qwertyuiopasdfghjklzxcvbnm';
  let out_set = [];
  for (var i = 0; i < num; i++) { out_set.push(in_set.charAt(Math.floor(Math.random()*in_set.length))); }
  return out_set;
}

const rotateLeft = ([h, ...t]) => t.push(h) && t;

const isEven = n => !(n % 2);

const summation = a => a.reduce((a, b) => a + b);

const cntLessThan = (x, a) => a.filter(h => h < x).length;

const equals = (a1, a2) => a1.every((n, i) => n === a2[i]);

const fibonacci = n => { switch (n) {
  case 0: case 1: return n;
  default: return fibonacci(n-2)+fibonacci(n-1);
}};
