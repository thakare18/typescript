/**
 * Topic: Access Modifiers, Readonly, Getters & Setters in TypeScript
 *
 * Access modifiers control how properties and methods
 * can be accessed inside and outside a class.
 */

// ======================================================
// 1. Public Modifier
// ======================================================

/*
Definition
----------
public is the default access modifier.
It can be accessed from anywhere.

Key Points
----------
• Accessible inside the class.
• Accessible outside the class.
• Accessible in child classes.
*/

class Chai {
  public flavor: string = "Masala";

  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients;
  }
}

const chai = new Chai();

console.log(chai.flavor);     // ✅ Accessible
console.log(chai.reveal());   // ✅ Accessible

// console.log(chai.secretIngredients);  Error


// 
// 2. Private Modifier
// 

/*
Definition
----------
private members can only be accessed
inside the same class.

Key Points
----------
• Cannot be accessed outside the class.
• Cannot be inherited directly.
• Used to hide sensitive data.
*/

class BankAccount {

  private balance = 5000;

  showBalance() {
    return this.balance; //  Accessible inside the class
  }

}

const account = new BankAccount();

console.log(account.showBalance());

// console.log(account.balance);  Error


// ======================================================
// 3. Protected Modifier
// ======================================================

/*
Definition
----------
protected members are accessible
inside the class and child classes.

Key Points
----------
• Cannot be accessed outside.
• Child classes can access them.
*/

class Shop {

  protected shopName = "Chai Corner";

}

class Branch extends Shop {

  getName() {
    return this.shopName;
  }

}

const branch = new Branch();

console.log(branch.getName());

// console.log(branch.shopName);  Error


// ======================================================
// 4. Readonly Modifier
// ======================================================

/*
Definition
----------
readonly properties can only be assigned once.

Key Points
----------
• Value is assigned during declaration
  or inside the constructor.
• Cannot be modified later.
*/

class Cup {

  readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

}

const cup = new Cup(250);

console.log(cup.capacity);

// cup.capacity = 500;  Error


// 
// 5. Getter (get)
// 

/*
Definition
----------
Getter returns a property like
a normal variable.

Key Points
----------
• Uses get keyword.
• No parentheses required.
• Used for controlled access.
*/

class Student {

  constructor(private _marks: number) {}

  get marks() {
    return this._marks;
  }

}

const student = new Student(95);

console.log(student.marks);


// 
// 6. Setter (set)
// 

/*
Definition
----------
Setter updates a property safely.

Key Points
----------
• Uses set keyword.
• Can validate values before updating.
*/

class ModernChai {

  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {

    if (value > 5) {
      throw new Error("Too sweet");
    }

    this._sugar = value;
  }

}

const tea = new ModernChai();

console.log(tea.sugar);

tea.sugar = 4;

console.log(tea.sugar);

// tea.sugar = 10;  Error


// ======================================================
// Quick Revision
// ======================================================

/*

Class
-----
Blueprint for creating objects.

public
------
Accessible everywhere.

private
-------
Accessible only inside the same class.

protected
---------
Accessible inside the class and child classes.

readonly
--------
Value can be assigned only once.

getter (get)
------------
Reads a property like a variable.

setter (set)
------------
Updates a property with validation.







 * Topic: OOP, Classes, 
 *
 * OOP (Object-Oriented Programming) is a programming paradigm
 * that organizes code into objects and classes. It helps make
 * code reusable, maintainable, and scalable.
 */

// ======================================================
// 1. Classes
// ======================================================

/*
Definition
----------
A class is a blueprint for creating objects.
It contains properties (variables) and methods (functions).

Key Points
----------
• Introduced in ES6.
• Objects are created using the 'new' keyword.
• Constructor initializes object values.
• 'this' refers to the current object.
*/

class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is driving`);
  }
}

const car = new Car("Toyota");

car.drive();

/*
Output:
Toyota is driving
*/
// 
// Quick Revision
// 

/*

Class
-----
Blueprint for creating objects.

Constructor
-----------
Automatically runs when an object is created.

public
------
Accessible from anywhere.

private
-------
Accessible only inside the class.

protected
---------
Accessible inside the class
and child classes.

static
------
Belongs to the class instead
of an object.

getter (get)
------------
Returns a property in a controlled way.

------------------------------------------------
*/