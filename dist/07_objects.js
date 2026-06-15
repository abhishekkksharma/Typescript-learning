"use strict";
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
};
// {
//     name:string;
//     price: number;
//     isHot: boolean
// }
let tea;
tea = {
    name: "Ginger tea",
    price: 10,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
//type compatible
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
