// ANY, UNLNOWN , NEVER -DATATYPES



let response: any = "42";

let numericLength:number=(response as string).length

type Book={
    name: string
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book


console.log(bookObject);

// type assertion(making the typescript to know it is of a type)
const inputElement = document.getElementById("username") as HTMLInputElement;


let value:any
value ="chai"
value = [1,2,3]
value = 2.5
value.toUpperCase() //this will give error


//unknow type check
let newvalue:unknown
newvalue ="chai"
newvalue = [1,2,3]
newvalue = 2.5
// newvalue.toUpperCase() // this will give warning
if(typeof newvalue==="string"){
    newvalue.toUpperCase();
}

try {

} catch (error) {
    if(error instanceof Error){
        console.log(error.message);        
    }
    else console.log("Error",error);    
}

const data: unknown = "Chai"
const strData: string = data as string

type Role="admin" | "user" |"superadmin"

function redirectBasedonRole(role:Role): void {
    if(role==="admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role==="user"){
        console.log("Redirecting to User dashboard");
        return
    }
    //if superadmin was not there then this will be never datatype
    role; //superadmin
}

function neverReturn():never {
    while(true){}    
}