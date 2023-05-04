/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
const newArr = [];

function range(start, end) {
  if (end < start) return [];

  if (start === end) return newArr;

  newArr.push(start);
  //console.log(newArr);
  return range(start + 1, end);
}


/*function range(start, end) {
  if (end < start) return [];

  if (start === end) return start;
  const arr = range(start + 1, end);
  console.log(arr);
  //arr.unshift(start);
  return arr;
}*/


console.log(range(1, 5)); // [1, 2, 3, 4]

console.log(range(3, 4)); // [3]
//console.log(range(7, 6)); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}