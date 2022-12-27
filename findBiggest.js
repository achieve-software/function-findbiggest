//* ORNEK: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

const findBiggest = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let biggest = n1;
  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};

console.log(`The Biggest:${findBiggest(2, 1, 4)}`);
console.log(`The Biggest:${findBiggest(6, 3, 2)}`);
console.log(`The Biggest:${findBiggest(55, 77, 122)}`);
console.log(`The Biggest:${findBiggest(-1, -7, 0)}`);
console.log(`The Biggest:${findBiggest(-1, -7, -12)}`);
console.log(`The Biggest:${findBiggest(-13, -5, -1)}`);

console.log(`The Biggest:${findBiggest(3, 5)}`);
console.log(`The Biggest:${findBiggest(-3, 5)}`);
console.log(`The Biggest:${findBiggest(-3, -5)}`);
console.log(`The Biggest:${findBiggest(-3, -5, 6)}`);
console.log(`The Biggest:${findBiggest(-5, -3)}`);
