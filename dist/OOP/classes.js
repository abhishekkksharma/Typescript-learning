"use strict";
class Beverage {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}
const coke = new Beverage("classic", 40);
coke.flavour = "zero sugar";
coke.price = 30;
console.log("Flavour: ", coke.flavour);
console.log("Priice: ", coke.price);
//Access Modifiers 
class Drink {
    constructor() {
        this.flavour = "Coke";
        this.secretFormula = "abc";
        // constructor (flavour:string){
        //     this.flavour=flavour
        // }
        this.shopName = "Drink space"; // accessible to class and subclasses
    }
    reveal() {
        return this.secretFormula; //ok
    }
}
const fanta = new Drink();
fanta.reveal(); // to access private properties
class Shop {
    constructor() {
        this.shopName = "Drink space";
    }
}
class Branch extends Shop {
    setName(shopName) {
        this.shopName = shopName;
    }
    getName() {
        return this.shopName;
    }
}
const branch = new Branch();
console.log(branch.getName());
branch.setName("Drink space Sector 14 barnch");
console.log(branch.getName());
