#! /usr/bin/env node
import inquirer from "inquirer";
// const answar = await inquirer.prompt([
//   { message: "enter firt number", type: "number", name: "first number" },
//   {message: "enter second number", type: "number",name:"second number"}
// ]);
//net info
//await user k input ka wait kro
// const answer =await inquirer.prompt([
//   { 
//     //key   value
//      type:"input",   
//      name:"name",
//      message:"what is your name"
//   }
// ])
// console.log("your name is "+answer.name);
//number
// const myNumber =await inquirer.prompt([
//   { 
//     //key   value
//      type:"number",   
//      name:"num",
//      message:"what is your number"
//   }
// ])
// console.log("your number is "+myNumber.num);
// console.log(typeof myNumber.num);
//example of power of number
// const power =await inquirer.prompt([
// {
//  type : "number",
//  name :"num",
//  message:"enter number get its squre",
// }
// ])
// let num1= power.num;
// console.log(`squre of number is ${power.num} `); //aisy bh likh skty or varaible bbna k  bh
//console.log(`sqaure of number is ${num1} is ${Math.pow(num1,3)}`); //java script method  math .pow root
//console.log(`sqaure of number is ${num1} is ${num1*num1}`);
//multply 2 nmbrs
// const power =await inquirer.prompt([
//   {
//    type : "number",
//    name :"num1",
//    message:"enter 1st number",
//   },   //, yei lga ka dsra propmt creat krngy
//   {
//     type : "number",
//     name :"num2",
//     message:"enter other number",
//    }
//   ])
//   let value1=power.num1;
//   let value2= power.num2; 
//   console.log(`product of your number is  
//   ${value1*value2}`);
//bmi cal
const bmiCal = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "enter your height",
    },
    {
        type: "number",
        name: "num2",
        message: "enter your weight",
    }
]);
let height = bmiCal.num1;
let weight = bmiCal.num2;
// let bmi=weight/(height*height);
// console.log("your bmi "+bmi);
console.log(`your bmi ${weight / (height * height)}`);
