/**

 * Topic: Interfaces in TypeScript
 *
 * An interface defines the structure (shape) of an object.
 * It acts like a contract that objects or classes must follow.
 *
 * Why use Interfaces?
 * -------------------
 * • Improves code readability.
 * • Provides type safety.
 * • Reduces bugs.
 * • Makes code reusable.
 * • Works well with OOP.
 */

// ======================================================
// 1. Basic Interface
// ======================================================

/*
Definition
----------
An interface describes the properties
and methods an object should have.

Key Points
----------
• Defines object structure.
• Doesn't create objects.
• Used only during compile time.
*/

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Prathamesh",
};

console.log(user);

/*
Output:
{
  id: 1,
  name: "Prathamesh"
}
*/


// 
// 2. Optional Properties (?)
// 

/*
Definition
----------
Optional properties may or may not exist.

Key Points
----------
• Uses ? operator.
• Useful when some data is optional.
*/

interface Employee {
  id: number;
  name: string;
  salary?: number;
}

const emp1: Employee = {
  id: 1,
  name: "Rahul",
};

const emp2: Employee = {
  id: 2,
  name: "Amit",
  salary: 50000,
};

console.log(emp1);
console.log(emp2);


// ======================================================
// 3. Readonly Properties
// ======================================================

/*
Definition
----------
readonly properties can only be assigned once.

Key Points
----------
• Assigned during initialization.
• Cannot be modified later.
*/

interface Product {
  readonly id: number;
  name: string;
}

const product: Product = {
  id: 101,
  name: "Laptop",
};

console.log(product);

// product.id = 200;  Error


// 
// 4. Function Interface
// 

/*
Definition
----------
Interfaces can describe functions.

Key Points
----------
• Defines function parameters.
• Defines return type.
*/

interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;

console.log(add(10, 20));

/*
Output:
30
*/


// 
// 5. Interface with Methods
// 

/*
Definition
----------
Interfaces can contain methods.

Key Points
----------
• Objects must implement the method.
*/

interface Person {
  name: string;

  greet(): void;
}

const person: Person = {

  name: "Prathamesh",

  greet() {
    console.log(`Hello ${this.name}`);
  },

};

person.greet();


// 
// 6. Extending Interfaces
// 
/*
Definition
----------
One interface can inherit another.

Key Points
----------
• Uses extends keyword.
• Child interface gets all properties.
*/

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Tommy",
  breed: "Labrador",
};

console.log(dog);


// 
// 7. Multiple Interface Inheritance
// 

interface PersonInfo {
  name: string;
}

interface EmployeeInfo {
  salary: number;
}

interface Manager extends PersonInfo, EmployeeInfo { // Multiple inheritance
  department: string;
}

const manager: Manager = {
  name: "Prathamesh",
  salary: 60000,
  department: "IT",
};

console.log(manager);


// 
// 8. Interface with Classes
// 

/*
Definition
----------
Classes implement interfaces
using the implements keyword.

Key Points
----------
• Forces the class to follow the interface.
*/

interface Vehicle {

  start(): void;

}

class Car implements Vehicle {

  start(): void {
    console.log("Car Started");
  }

}

const car = new Car();

car.start();


// 
// 9. Interface vs Type
// 

/*

Interface
---------
• Best for objects.
• Supports declaration merging.
• Can be implemented by classes.

Type
----
• Can represent objects.
• Can represent unions.
• Can represent tuples.
• More flexible.

*/


// 
// Revision
// 

/*

Interface
---------
Defines the structure of an object.

Optional (?)
------------
Property may or may not exist.

readonly
--------
Cannot change after initialization.

extends
-------
Interface inheritance.


Function Interface
------------------
Defines function signature.

Method Interface
----------------
Defines methods inside an object.

--------------------------------------
*/