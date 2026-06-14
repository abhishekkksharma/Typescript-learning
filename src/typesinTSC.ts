/*
The typescript will automatically know that it is 
a string data type and if you wish to change it to 
other data type this will throw and error.
*/
let drink = "Coffee"

let cups = Math.random() > 0.5 ? 10 : 5;

let flavour: string = "Orange";
// can be overwriten 
flavour = "Apple"
// wont work
// flavour = 2;



// -----------------------------

// primitives
let age: number = 25;
let userName: string = "Alice";
let isActive: boolean = true;

// arrays
let nums: number[] = [1, 2, 3];
let names: Array<string> = ["A", "B"];

// tuple
let user: [string, number] = ["Alice", 25];

// enum
enum Status {
  Success,
  Error,
  Loading
}
let state: Status = Status.Success;

// any / unknown
let x: any = 10;
let y: unknown = "test";

// function
function add(a: number, b: number): number {
  return a + b;
}

// object
let person: { name: string; age: number } = {
  name: "Bob",
  age: 30
};

// union
let id: number | string = "A101";

// type alias
type User = { name: string; age: number };
let u: User = { name: "Sam", age: 22 };

// interface
interface Product {
  name: string;
  price: number;
}
let p: Product = { name: "Phone", price: 500 };

// literal
let dir: "left" | "right" = "left";

// assertion
let val: unknown = "hello";
let len: number = (val as string).length;
