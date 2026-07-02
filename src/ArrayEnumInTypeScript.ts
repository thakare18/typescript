
// 1. Arrays


/*
Definition
----------
An array is a collection of multiple values of the same type.

Key Points
----------
• Stores multiple values.
• All elements usually have the same type.
• Size can grow or shrink.
• Access elements using their index.
• Two syntax styles:
    1. Type[]
    2. Array<Type>
*/

const numbers: number[] = [10, 20, 30];

const fruits: Array<string> = [
    "Apple",
    "Mango",
    "Banana",
];

type Chai = {
    name: string;
    price: number;
};

const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];

console.log(menu);



// 2. Tuples


/*
Definition
----------
A tuple is a special type of array where the
number of elements, their order, and their
types are fixed.

Key Points
----------
• Fixed length.
• Fixed order.
• Different data types allowed.
• Better than arrays when position matters.
*/

let chaiTuple: [string, number]; // Tuple with two elements: string and number

chaiTuple = ["Masala", 20];

console.log(chaiTuple);



// 3. Optional Tuple


/*
Definition
----------
Optional tuple elements may or may not exist.

Key Points
----------
• Uses ? operator.
• Optional values are usually placed last.
• Useful when some values are not mandatory.
*/

let userInfo: [string, number, boolean?];

userInfo = ["Hitesh", 100];
userInfo = ["Hitesh", 100, true];

console.log(userInfo);



// 4. Named Tuple


/*
Definition
----------
Named tuples give meaningful names to tuple elements.

Key Points
----------
• Improves code readability.
• Works exactly like normal tuples.
• Names are only for developers.
*/
// Example: Named tuple
const chaiItem: [name: string, price: number] = [
    "Masala",
    25,
];

console.log(chaiItem);



// 5. Readonly Tuple


/*
Definition
----------
A readonly tuple cannot be modified after creation.

Key Points
----------
• Prevents modification.
• Useful for coordinates.
• Useful for fixed configuration values.
*/

const location: readonly [number, number] = [
    28.66,
    32.22,
];

console.log(location);


// ======================================================
// 6. Tuple push()
// ======================================================

/*
Important Note
--------------
Although JavaScript allows push() on tuples,
it is NOT recommended because it breaks the
fixed-length nature of tuples.
*/

let t: [string, number] = ["chai", 10];

t.push("extra");

console.log(t);


// ======================================================
// 7. Enums
// ======================================================

/*
Definition
----------
An enum is a collection of named constant values.

Key Points
----------
• Makes code more readable.
• Avoids using magic numbers.
• Numeric enums start from 0.
• Values can also start from a custom number.
 all are in start from capital letters best practice
*/

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = CupSize.LARGE; 

console.log(size);



// 8. Enum with Custom Values


/*
Key Points
----------
• First value starts from 100.
• Remaining values increase automatically.
*/

enum Status {
    PENDING = 100,
    SERVED,
    CANCELLED,
}

console.log(Status.PENDING);
console.log(Status.SERVED);
console.log(Status.CANCELLED);



//  Revision

/*

Array
-----
Stores multiple values of the same type.

Tuple
-----
Stores fixed values in a fixed order.

Optional Tuple
--------------
Some tuple values are optional.

Named Tuple
-----------
Adds names for better readability.

Readonly Tuple
--------------
Cannot be modified.

Enum
----
Collection of constant values.

Remember

Array            -> Same type, dynamic size
Tuple            -> Fixed order + fixed types(number plus string)
Optional (?)     -> Value may or may not exist
readonly         -> Cannot change
Named Tuple      -> Better readability
Enum             -> Named constant values

*/