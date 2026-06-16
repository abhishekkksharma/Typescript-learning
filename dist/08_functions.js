"use strict";
//input types definition
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 3);
//return type definition
function getChaiPrice() {
    return 10;
}
console.log(getChaiPrice());
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
function logChai() {
    console.log("Chai is ready");
}
//optional type
// function orderChai(type?:string) {
// }
//if present then used else Masala
function orderChai(type = "Masala") {
}
function createChai(order) {
    return 4;
}
