// Interface Declaration
interface User {
  readonly id: number;      // Cannot be changed
  name: string;             // Required property
  age?: number;             // Optional property

  greet(): void;            // Method
}

// Class implementing the interface
class Student implements User {
  readonly id: number;
  name: string;
  age?: number;

  constructor(id: number, name: string, age?: number) {
    this.id = id;
    this.name = name;
    if (age !== undefined) {
      this.age = age;
    }
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Creating an object
const student = new Student(1, "Prathamesh", 21);

console.log(student.id);      // 1
console.log(student.name);    // Prathamesh
console.log(student.age);     // 21

student.greet();              // Hello, my name is Prathamesh

// student.id = 10;           //  Error: Cannot assign to 'id' because it is a readonly property.