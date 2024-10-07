/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function isOdd(n) {
  const odd = true;

  const even = false;

  if (n % 2 === 0) {
    return even;
  } else {
    return odd;
  }
}

//testing

console.log(isOdd(7));
console.log(isOdd(10));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  //let oddCounter = 0;

  //for (let i = 0; i < n; i++) {
  // if (isOdd(i)) {
  //   oddCounter++;
  // }
  //}

  const oddCounter = n / 2;

  return oddCounter;
}

console.log(Math.floor(oddsSmallerThan(7)));
console.log(Math.floor(oddsSmallerThan(15)));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}

console.log(squareOrDouble(16));
console.log(squareOrDouble(9));
