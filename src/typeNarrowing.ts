function getChai(kind:string | number) {
    if(typeof kind==='string'){
        return `Making ${kind} chai...`;
    }
    return `Cjai order: ${kind}`;
}

function serveChai(msg?:string) {
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}


class kulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}
class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai:kulhadChai | Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve(); 
    }
}


type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any) :obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj!=null && 
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
    )
}

function serveOrder(item:ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} Sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spicelevel:number}
type GingerChai = {type: "ginger"; amount:number}
type ElaichiChai = {type: "elaichi"; aroma:number}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order:Chai) {
    switch (order.type) {
        case "masala":
            return "Masala Chai is being made"
            break;
    
        case "elaichi":
            return "Elaichi Chai is being made"
            break;
    
        case "ginger":
            return "Ginger Chai is being made"
            break;
    }
}

function brew(order:MasalaChai | GingerChai) {
    if("spicelevel" in order){
        //
    }
}

function isStringArray(arr:unknown): arr is String[]{
    
}