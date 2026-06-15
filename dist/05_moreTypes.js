"use strict";
// ANY, UNLNOWN , NEVER -DATATYPES
let response = "42";
let numericLength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
// type assertion(making the typescript to know it is of a type)
const inputElement = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); //this will give error
//unknow type check
let newvalue;
newvalue = "chai";
newvalue = [1, 2, 3];
newvalue = 2.5;
// newvalue.toUpperCase() // this will give warning
if (typeof newvalue === "string") {
    newvalue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else
        console.log("Error", error);
}
const data = "Chai";
const strData = data;
function redirectBasedonRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to User dashboard");
        return;
    }
    //if superadmin was not there then this will be never datatype
    role; //superadmin
}
function neverReturn() {
    while (true) { }
}
