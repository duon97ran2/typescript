export {}

type Product = {
  id:number;
  name:string;
}
// tsc --init
//target: "es2018"
//baseUrl "./src"
//outDir: "./dist"
//tsc --watch;

const a:number =50;
const b:number =20;
const name:string ="Duong";
const age:number =20;
const status:boolean=true;
const info:{id:number,name:string}={id:1,name:"a"};
const arr: Array<number> =[12,32,34,4];
const arr2: Array<Product>=[{id:1,name:"b"},{id:2,name:"c"}];
const arr3: string[]=["2","d","td"];

function sum(numA:number,numB:number):number{
  return numA+numB;
}
console.log(sum(a,b));
