//Type Assertion and Unknown Type
let newValue : unknown;

newValue = 10; // number
newValue = "Hello"; // string
newValue = true; // boolean
// (newValue as string).toUpperCase(); // No error: Type assertion used to narrow the type.

if ( typeof newValue === "string") {
    newValue.toUpperCase(); // No error
}

//try catch block

try {

}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message); // No error
    }
    console.log(error); // No error
}


const data: unknown = "New data value";
const strData : string = data as string; // Type assertion to string

// Never in TypeScript 
//The never type is used for functions that never return a value.

// Function always throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// Calling the function
throwError("Something went wrong!");