
type ChaiOrderr = {
    type: string; 
    sugar: number; 
    strong: boolean;
};

function makeChai(order: ChaiOrderr) {
    console.log(order);   
}

function serveChai(order: ChaiOrderr) {
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
    size: "small" | "large" = "large"; 
}

