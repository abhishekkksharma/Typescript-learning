var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _walet_balance;
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
//protected example
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
//private 
class walet {
    constructor() {
        _walet_balance.set(this, 100); // same as private balance=100;
    }
    getBalance() {
        return __classPrivateFieldGet(this, _walet_balance, "f");
    }
}
_walet_balance = new WeakMap();
const w = new walet();
w.getBalance();
//getters and setters
class ModerChai {
    constructor() {
        this._sugar = 2;
    }
    get sugar() {
        return this._sugar;
    }
    set sugar(s) {
        this._sugar = s;
    }
}
const mc = new ModerChai();
mc.sugar = 3; //set
mc.sugar; //get
//static members
class EkChai {
    constructor(flavour) {
        this.flavour = flavour;
    }
}
EkChai.shopName = "Chai caffe";
console.log(EkChai.shopName);
//abstarct classes 
class A {
}
class B extends A {
    make() {
        console.log("Abstracted method");
    }
}
class Heater {
    heat() {
    }
}
class Example {
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
