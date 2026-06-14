
type ChaiOrderr = {
    type: string; 
    sugar: number; 
    strong: boolean;
};

function makeChai(order: ChaiOrderr) {
    console.log(order);   
}

function serveChaii(order: ChaiOrderr) {
    console.log(order);   
}

type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChaii implements TeaRecipe{
    water = 100;
    milk = 50;
}

interface Cupsize {
    size : "small" | "large"
}

class Chaii implements Cupsize{
    size: "small" | "large" = "large";  //literal types (literally this value is to be assigned)
}


type BaseChai = { teaLeaves: number}
type Extra = { masala:number}

type NewMasalaChai = BaseChai & Extra;
const cup : NewMasalaChai = {
    teaLeaves:2,
    masala:1
}

type Userr = {
    username:string;
    bio?:string
}

const u1:Userr = {username:"Abhishek"}
const u2:Userr = { username:"Abhishek", bio: "Developer"}

type Config = {
    readonly appName: string
    version: number
}

const cfg:Config={
    appName: "Masterji",
    version:1
}

// cfg.appName="Instagram" //not allowed