const chai = {
    name : "masala chai",
    price:20,
    isHot:true
}

// {
//     name:string;
//     price: number;
//     isHot: boolean
// }

let tea: {
    name:string;
    price: number;
    isHot: boolean
}

tea = {
    name:"Ginger tea",
    price: 10,
    isHot:true
}

type Tea={
    name:string;
    price: number;
    ingredients:string[]
}

const adrakChai : Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger","tea leaves"]
}

type Cup = {size:string};
let smallCup:Cup={size:"200ml"}

let bigCup = {size:"500ml",material:"steel"}
//type compatible
smallCup=bigCup

type Brew= {brewTime:number}
const coffee={brewTime:5,beans:"Arabica"}
const chaiBrew:Brew=coffee


//types seperation -good practice
//used for code clearity
type Item={name:string,quantity:number}
type Address={street:string,pin:number}

type Order={
    if:string;
    items:Item[];
    address:Address;
}