const chaiFlavours:string[]= ["masala","adrak"]
const chaiPrices:number[]=[1,2,3]
//different syntax
const rating: Array<number> = [4.5,5.0]

type chai={
    name:string;
    price:number
}

//array of objects
const menu:chai[]=[
    {name:"Masala",price:15},
    {name:"Adrak",price:10}
]

//readonly array
const cities:readonly string[] = ["Delhi","Jaipur"]
//not allowed
// cities.push("pune")

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

let chaiTupple:[String,number];

chaiTupple=["Masala",15]
// chaiTupple=[20,"masala"] not allowed

//named tupple
const chaiItems: [name:string,price:number]=["masala",10]

//Enums
enum Cupsizee {
    SMALL,
    MEDIUM,
    LARGE
}

const size=Cupsizee.LARGE

enum Status {
    PENDING=100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA= "masala",
    GINGER="ginger"
}

function makechai(type:ChaiType) {
    console.log(`Making ${type}`);
}

makechai(ChaiType.GINGER)