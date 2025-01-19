# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This occurs when performing operations on incompatible types.

## The Bug

The `add` function is defined to accept two numbers and return a number. However, in the example, we are calling the function with a number and a string. TypeScript correctly flags this as an error since it cannot implicitly convert the string to a number.

## The Solution

The solution involves ensuring that all inputs are of the correct type.  This can involve explicit type checking or conversion.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler (like the TypeScript Playground or within your IDE).
3. Observe the type error.
4. View `bugSolution.ts` to see the corrected code.