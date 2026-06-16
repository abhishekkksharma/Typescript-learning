//input types definition
function makeChai(type:string, cups:number) {
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala",3);

//return type definition
function getChaiPrice():number {
    return 10;
}

console.log(getChaiPrice());


function makeOrder(order:string) {
    if(!order) return null;
    return order;
}

function logChai():void {
    console.log("Chai is ready");    
}

//optional type
// function orderChai(type?:string) {
    
// }
//if present then used else Masala
function orderChai(type:string="Masala") {
    
}

function createChai(order:{
    type:string;
    sugar:number;
    size: "small" | "large"
}):number {
    return 4;    
}