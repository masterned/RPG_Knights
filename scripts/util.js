'use strict';

const push = (a, x) => a.push(x) && a;

const range = (n, m) =>
  m === undefined
  ? range(1, n)
  : n === m
    ? [m]
    : n < m
      ? push(range(n, m-1),m)
      : push(range(n, m+1),m);

const genRandSet = n => range(n).sort(_ => 0.5 - Math.random());

const rotateLeft = ([h, ...t]) => t.push(h) && t;

const isEven = n => !(n % 2);

const summation = a => a.reduce((a, b) => a + b);

const cntLessThan = (x, a) => a.filter(h => h < x).length;

const equals = (a1, a2) => a1.every((n, i) => n === a2[i]);
