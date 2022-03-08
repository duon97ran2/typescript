"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --init
//target: "es2018"
//baseUrl "./src"
//outDir: "./dist"
//tsc --watch;
const a = 50;
const b = 20;
const name = "Duong";
const age = 20;
const status = true;
const info = { id: 1, name: "a" };
const arr = [12, 32, 34, 4];
const arr2 = [{ id: 1, name: "b" }, { id: 2, name: "c" }];
const arr3 = ["2", "d", "td"];
function sum(numA, numB) {
    return numA + numB;
}
console.log(sum(a, b));
