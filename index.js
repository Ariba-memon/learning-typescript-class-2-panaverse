"use strict";
// console.log("hello")
// let message = "Hello World";
// message = 6;
// console.log(message);
// let e ="USA";
// let f=10.9;
// f=22;
// console.log(f) //22
// let g=false;
// g=true;
// console.log(g)
// import a from "./first";
// import {b, c as d} from "./second";
exports.__esModule = true;
// console.log(a + b + d);
// import a from "./first.js";
// import {b, c} from "./second.js";
// console.log(a + b + c);
var inquirer_1 = require("inquirer");
var answers = await inquirer_1["default"].prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
