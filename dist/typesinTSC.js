"use strict";
/*
The typescript will automatically know that it is
a string data type and if you wish to change it to
other data type this will throw and error.
*/
let drink = "Coffee";
let cups = Math.random() > 0.5 ? 10 : 5;
let flavour = "Orange";
// can be overwriten 
flavour = "Apple";
// wont work
// flavour = 2;
// -----------------------------
// primitives
let age = 25;
let userName = "Alice";
let isActive = true;
// arrays
let nums = [1, 2, 3];
let names = ["A", "B"];
// tuple
let user = ["Alice", 25];
// enum
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Error"] = 1] = "Error";
    Status[Status["Loading"] = 2] = "Loading";
})(Status || (Status = {}));
let state = Status.Success;
// any / unknown
let x = 10;
let y = "test";
// function
function add(a, b) {
    return a + b;
}
// object
let person = {
    name: "Bob",
    age: 30
};
// union
let id = "A101";
let u = { name: "Sam", age: 22 };
let p = { name: "Phone", price: 500 };
// literal
let dir = "left";
// assertion
let val = "hello";
let len = val.length;
