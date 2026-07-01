
//  * File: object-notes.ts
//  * Topic: Objects, Partial, Required, Omit in TypeScript
//  */

// ======================================================
// Object Type
// ======================================================

// An object type defines the structure of an object.

type User = {
  id: number;
  name: string;
  email?: string; // Optional Property
};

// Creating an object
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

// Notes:
// • Objects store data as key-value pairs.
// • TypeScript checks the object's structure.
// • '?' makes a property optional.

// ======================================================
// Partial<T>
// ======================================================

// Partial<T> makes ALL properties optional.

type PartialUser = Partial<User>;

const updateUser: PartialUser = {
  name: "Rahul",
};

console.log(updateUser);

/*
Output:
{
  name: "Rahul"
}
*/

// Notes:
// • Converts every property into an optional property.
// • Mostly used while updating existing data.
// • You don't need to provide all properties.

// ======================================================
// Required<T>
// ======================================================

// Required<T> makes ALL properties required.

type RequiredUser = Required<User>;

const fullUser: RequiredUser = {
  id: 2,
  name: "Amit",
  email: "amit@gmail.com",
};

console.log(fullUser);

/*
Output:
{
  id: 2,
  name: "Amit",
  email: "amit@gmail.com"
}
*/

// Notes:
// • Removes all optional (?) properties.
// • Every property must be provided.

// ======================================================
// Omit<T, Keys>
// ======================================================

// Omit<T, Keys> removes selected properties.

type UserWithoutEmail = Omit<User, "email">;

const newUser: UserWithoutEmail = {
  id: 3,
  name: "Rohit",
};

console.log(newUser);

/*
Output:
{
  id: 3,
  name: "Rohit"
}
*/

// Notes:
// • Removes one or more properties from a type.
// • Original type remains unchanged.
// • Useful for hiding fields like password, email, etc.

// ======================================================
// Summary
// ======================================================

/*
Object Type
-----------
Defines the structure of an object.

Example:
type User = {
  id: number;
  name: string;
}

--------------------------------------------

Partial<T>
----------
Makes ALL properties optional.

Example:
type UpdateUser = Partial<User>;

--------------------------------------------

Required<T>
-----------
Makes ALL properties required.

Example:
type CompleteUser = Required<User>;

--------------------------------------------

Omit<T, Keys>
-------------
Removes selected properties from a type.

Example:
type UserWithoutEmail = Omit<User, "email">;

--------------------------------------------

Easy Way to Remember

Object      → Defines object structure.
Partial     → Everything becomes optional.
Required    → Everything becomes mandatory.
Omit        → Removes selected properties.
*/
