let newValue : unknown;

newValue = 10; // number
newValue = "Hello"; // string
newValue = true; // boolean
// (newValue as string).toUpperCase(); // No error: Type assertion used to narrow the type.

if ( typeof newValue === "string") {
    newValue.toUpperCase(); // No error
}