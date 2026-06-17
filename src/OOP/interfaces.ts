interface I {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala: I = {
    flavour: "masala",
    price: 30
}

interface shop {
    readonly id: number;
    name: string;
}

const s: shop = {
    id: 1,
    name: "chai cafe"
}
// s.id=2

interface discountCalculator{
    (price:number):number
}
const apply50:discountCalculator=(p)=> p*0.5

interface TeaMachine{
    start():void;
    stop():void
}
const machine:TeaMachine={
    start(){
        console.log("Machine Start");
    },
    stop() {
        console.log("Machine stop");
    }
}

interface Rating{
    [flavour:string]:number
}
const ratings:Rating={
    masala:5,
    ginger:4.5
}

interface UserI{
    name:string
}
interface UserI{
    age:number
}

const userr:UserI={
    name:"Abhishek",
    age:21
}

interface P{p:string}
interface Q{q:string}

interface R extends P,Q{r:string}