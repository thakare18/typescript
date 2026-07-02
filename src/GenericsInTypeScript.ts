/**
 * Topic: Advanced Generics & Interfaces in TypeScript
 * ======================================================
 *
 * *
 * Generics allow you to create reusable, type-safe
 * components that work with different data types.
 *
 * Why use Generics?
 * -----------------
 * • Reusable code.
 * • Type Safety.
 * • Avoids using 'any'.
 * • Better IntelliSense.
 * • Reduces code duplication.
// 
// 1. Generic Function
// 

/*
Definition
----------
A generic function works with any data type while
preserving the original type.

Key Points
----------
• Uses <T>.
• T is a placeholder for any type.
• Avoids using 'any'.
• Returns the same type it receives.
*/

function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray("Masala"));
console.log(wrapInArray(42));
console.log(wrapInArray({ flavor: "Ginger" }));

/*
Output:
["Masala"]
[42]
[{ flavor: "Ginger" }]
*/


// ======================================================
// 2. Multiple Generic Types
// ======================================================

/*
Definition
----------
A function can have more than one generic type.

Key Points
----------
• Uses <T, U>.
• Useful when working with multiple values.
*/

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(pair("Masala", "Tea"));
console.log(pair("Price", 25));

/*
Output:
["Masala", "Tea"]
["Price", 25]
*/


// 
// 3. Generic Interface
// 

/*
Definition
----------
Interfaces can also use generic types.

Key Points
----------
• Makes interfaces reusable.
• Type is provided while creating the object.
*/

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 10,
};

const stringBox: Box<string> = {
  content: "10",
};

console.log(numberBox);
console.log(stringBox);

/*
Output:
{ content: 10 }
{ content: "10" }
*/


// 
// 4. Generic Interface (API Response)
// 

/*
Definition
----------
Generic interfaces are commonly used
for API responses.

Key Points
----------
• Data type can change.
• Structure remains the same.
*/

interface ApiPromise<T> {
  status: number;
  data: T;
}

const response: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "Masala",
  },
};

console.log(response);

/*
Output:
{
  status: 200,
  data: {
    flavor: "Masala"
  }
}
*/


// 
// 5. Interface Merging
// 

/*
Definition
----------
Interfaces having the same name
are automatically merged.

Key Points
----------
• Only works with interfaces.
• Common interview question.vimp..
*/

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Hitesh",
  age: 42,
};

console.log(user);

/*
Output:
{
  name: "Hitesh",
  age: 42
}
*/


// 
// 6. Interface Inheritance
// 

/*
Definition
----------
Interfaces can inherit from one
or multiple interfaces.

Key Points
----------
• Uses extends keyword.
• Reuses existing properties.
*/

interface A {
  a: string;
}

interface B {
  b: string;
}

interface C extends A, B {}

const obj: C = {
  a: "Hello",
  b: "TypeScript",
};

console.log(obj);

/*
Output:
{
  a: "Hello",
  b: "TypeScript"
}
*/

// 
//  Revision
// 

/*

Generic Function
----------------
Reusable function for any type.

<T>
---
Placeholder for a type.

<T, U>
-------
Multiple generic types.

Generic Interface
-----------------
Reusable interface.

Interface Merging
-----------------
Interfaces with the same name combine automatically.

Interface Inheritance
---------------------
One interface extends another.

ApiPromise<T>
-------------
Reusable API response type.

--------------------------------------------

*/