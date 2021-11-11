//1) Basic sum
// Complete the function sum such that it returns the sum of a and b.

function sum(a, b) {
  const total = a + b;
  console.log(total);
  return total;
}
console.log(sum(1, 3));

// 2)String length
// Complete the function getCharCount such that it returns the number of characters in the str parameter that it receives.

function getCharCount(str) {
  return str.length;
}

console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15
