class Beverage {
    flavour: string;
    price: number;
    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}


const coke = new Beverage("classic", 40);
coke.flavour = "zero sugar"
coke.price = 30

console.log("Flavour: ",coke.flavour);
console.log("Priice: ",coke.price);


//Access Modifiers 
class Drink{
    public flavour:string="Coke";
    private secretFormula:string="abc"
    // constructor (flavour:string){
    //     this.flavour=flavour
    // }

    protected shopName="Drink space"// accessible to class and subclasses

    reveal(){
        return this.secretFormula; //ok
    }
}

const fanta=new Drink();
fanta.reveal() // to access private properties

//protected example
class Shop{
    protected shopName="Drink space"
}
class Branch extends Shop {
    setName(shopName:string){
        this.shopName=shopName;
    }
    getName(){
        return this.shopName;
    }
}

const branch=new Branch();
console.log(branch.getName());
branch.setName("Drink space Sector 14 barnch");
console.log(branch.getName());


//private 

class walet{
    #balance =100; // same as private balance=100;
    getBalance(){
        return this.#balance;
    }
}

const w=new walet();
w.getBalance();

//getters and setters
class ModerChai{
    private _sugar=2;
    get sugar(){
        return this._sugar;
    }
    set sugar(s:number){
        this._sugar=s;
    }
}
const mc = new ModerChai();
mc.sugar=3; //set
mc.sugar //get

