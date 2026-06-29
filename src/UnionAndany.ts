// ====================================================
// TypeScript: Any Type
// ====================================================

// The 'any' type disables type checking.
// A variable of type 'any' can hold values of any type.

let data: any = "Hello TypeScript";
console.log(data); // Hello TypeScript

data = 100;
console.log(data); // 100

data = true;
console.log(data); // true

data = {
  name: "Prathamesh",
  role: "Developer"
};
console.log(data);

// ====================================================
// TypeScript: Union Types
// ====================================================

// A union type allows a variable to hold multiple types.

let userId: number | string;

userId = 101;
console.log(userId); // 101

userId = "EMP101";
console.log(userId); // EMP101

// Example: User status
let userStatus: "active" | "inactive" | "pending";

userStatus = "active";   // Valid
userStatus = "pending";  // Valid
// userStatus = "blocked"; // Error

// Example: Function with union types
function printId(id: number | string): void {
  console.log(`User ID: ${id}`);
}

printId(123);
printId("EMP123");

// Example: Product price can be number or string
let price: number | string;

price = 999;
console.log(price);

price = "₹999";
console.log(price);