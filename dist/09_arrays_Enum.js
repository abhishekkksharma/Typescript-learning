"use strict";
const chaiFlavours = ["masala", "adrak"];
const chaiPrices = [1, 2, 3];
//different syntax
const rating = [4.5, 5.0];
//array of objects
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 10 }
];
//readonly array
const cities = ["Delhi", "Jaipur"];
//not allowed
// cities.push("pune")
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
let chaiTupple;
chaiTupple = ["Masala", 15];
// chaiTupple=[20,"masala"] not allowed
//named tupple
const chaiItems = ["masala", 10];
//Enums
var Cupsizee;
(function (Cupsizee) {
    Cupsizee[Cupsizee["SMALL"] = 0] = "SMALL";
    Cupsizee[Cupsizee["MEDIUM"] = 1] = "MEDIUM";
    Cupsizee[Cupsizee["LARGE"] = 2] = "LARGE";
})(Cupsizee || (Cupsizee = {}));
const size = Cupsizee.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; //102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makechai(type) {
    console.log(`Making ${type}`);
}
makechai(ChaiType.GINGER);
