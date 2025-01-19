function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: both arguments are numbers.

function addString(a: number, b: string): number {
  return a + parseFloat(b); //Convert the string b to a number
}

let result2 = addString(5, '10'); //Correct: Converted string to number