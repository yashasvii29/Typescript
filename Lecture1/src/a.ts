let x:number=10;
// whenever ts understands from the value that concept is known as inference

let y:string="yashasvi";
// y=10...error
console.log(x,y);

// typescript provides type safety
// zod provides runtime safety but typescript is a compile time data safety
// /ts is a programming language which transpile(transfer+compile) itlsef to compile js on the browser...
// TS->JS->Browser
// ts automatically js m compile kr
// install typescript globally in the system by command npm i -g typescript
// we will use this command to creates a tsconfig.json file inside the folder npx tsc --init...tsc stands for typescript compiler..this command creates a tsconfig.json file inside the folder
// Typescript tranfer and compile the js bcz js is the only programming language understand by the browser
// tsc -b command is used to build or creates a js file which ahas been transpiled by the ts file

// mkdir TS && cd TS
// npm init -y
// npx tsc --init
// tsc -b .. by this command we will transpile the js from ts

// tuples
let arrr:[number,string] =[10,"sam"];
let ba:string[]=["yashi","vrinda"];
let cb:number[] = [1,3,5,20];


let yashu = ()=>{
    console.log("hello");
}

// dist to production..a.js file
// src to github....a.ts file



// let x:number = 10;
// let y:string = "sam"
// let z:boolean = true;
// console.log(x, y ,z)


// -------------------


// function sam(x):number{
//     console.log("hello")
//     return 1
// }
// sam(10);

// -----------------

function a(fn : ()=>string ):boolean{
    fn();
    return true;
}
function bk(){
    console.log("hello");
    return "sam"
}
a(bk)

// ---------------------
// tuples
// let arr1:[number , string] = ["sam" ,10]
let arr2:[number , string] = [10 , "sam"]

let b:string[] = ["sam" , "vpohra" , "mav"]
let c:number[] = [1,3, 5, 10]

// --------------------

let samm = ()=>{
    console.log("hello")
}