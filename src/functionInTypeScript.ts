/**
 * Topic: Functions in TypeScript
 *
 * Functions in TypeScript allow you to define
 * parameter types and return types, making your
 * code safer and easier to maintain.
 */


// 1. Function with Parameters


function makeChai(type: string, cups: number): void {
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

/*
Output:
Making 2 cups of Masala
*/

// Notes:
// • type must be a string.
// • cups must be a number.
// • void means the function doesn't return anything.


// 
// 2. Function with Return Type
// 

function getChaiPrice(): number {
    return 25;
}

console.log(getChaiPrice());

/*
Output:
25
*/

// Notes:
// • :number means this function must return a number.


// 
// 3. Function Returning null
// 

function makeOrder(order: string) {
    if (!order) return null;

    return order;
}

console.log(makeOrder("Masala"));

/*
Output:
Masala
*/

// Notes:
// • Returns null if order is empty.
// • Otherwise returns the order.


// 
// 4. Function Returning void
// 

function logChai(): void {
    console.log("Chai is ready");
}

logChai();

/*
Output:
Chai is ready
*/

// Notes:
// • void means no value is returned.


// 
// 5. Optional Parameters (?)
// 

function orderChai(type?: string) {
    console.log(type);
}

orderChai("Masala");
orderChai();

/*
Output:
Masala
undefined
*/

// Notes:
// • ? makes the parameter optional.
// • Function can be called with or without the parameter.


// 
// 6. Default Parameters
// 

function orderTea(type: string = "Masala") {
    console.log(type);
}

orderTea();
orderTea("Ginger");

/*
Output:
Masala
Ginger
*/

// Notes:
// • If no argument is passed,
//   the default value is used.


// =
// 7. Type Alias as Function Parameter
// 

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function prepareChai(order: ChaiOrder): void {
    console.log(order);
}

prepareChai({
    type: "Masala",
    sugar: 2,
    strong: true,
});

/*
Output:
{
  type: 'Masala',
  sugar: 2,
  strong: true
}
*/

// Notes:
// • Type aliases make object parameters reusable.
// • Helps keep code clean and readable.


// 
// 8. Discriminated Union
// 

type MasalaChai = {
    type: "masala";
    spiceLevel: number;
};

type GingerChai = {
    type: "ginger";
    amount: number;
};

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function serveChai(order: Chai): string {
    switch (order.type) {
        case "masala":
            return `Masala Chai - Spice Level: ${order.spiceLevel}`;

        case "ginger":
            return `Ginger Chai - Amount: ${order.amount}`;

        case "elaichi":
            return `Elaichi Chai - Aroma: ${order.aroma}`;
    }
}

console.log(
    serveChai({
        type: "masala",
        spiceLevel: 5,
    })
);

/*
Output:
Masala Chai - Spice Level: 5
*/

// Notes:
// • TypeScript automatically narrows the type.
// • switch(order.type) identifies the correct object type.
// • This is called Discriminated Union.


// ======================================================
// Summary
// ======================================================

/*
Function Parameters
-------------------
Accept values when calling a function.

Return Type
-----------
Specifies what the function returns.

void
----
Function returns nothing.

Optional Parameter (?)
----------------------
Parameter is optional.

Default Parameter (=)
---------------------
Uses a default value if no argument is passed.

Type Alias
----------
Creates reusable custom object types.

Discriminated Union
-------------------
Safely handles multiple object types using
a common property (like type).

------------------------------------------------

Easy Way to Remember

Parameters      -> Input to a function.
Return Type     -> Output of a function.
void            -> No output.
?               -> Optional parameter.
=               -> Default value.
type            -> Reusable custom type.
|               -> Union of multiple types.
switch(type)    -> Narrows union types safely.
*/