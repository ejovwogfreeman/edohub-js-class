// var let const;

// var
// initialised, re-assigned and re-decleared

// let
// initialised, re-assigned and cannot be re-declared

// const
// cannot be initialised, re-assined and re-declared

// var name;

// name = "freeman";

// name = "Sandra";

// var name = "Aminat";
// var name = "Aminat";

// let name;
// name = "freeman";

// name = "Mark powells";

// const name = "freeman";

// // name = "gb";

// primitive and reference data types

// primitive
// number, string, boolean, null and undefined

// var x, y, z;
// x = 12;
// // x = x + 5;
// x--;

// string concatenation

// var name = "Cindy";

// var school = "Uniben";

// var sentence = "Hello " + name + " welcome to " + school;

// var sentence = `Hello ${name} welcome to ${school}`;

// var x = "Hello";
// var y = 5;

// js operators
// arithmetic operator +, -, *, /, %, ++, --
// assignment =
// comparism >, <, >=, <=, ==, ===, !=, !==
// logical operators &&, ||, !
// conditionals if, else, elseif, switch, ternary(?)
// Type operator

// let x = 3;

// if (x > 3) {
//   console.log("x is greater than 3");
// } else if (x === 3) {
//   console.log("x is equal to 3");
// } else {
//   console.log("nothing here");
// }

// let x = 2;

// if (x > 3) {
//   console.log("x is greater than 3");
// } else if (x < 3) {
//   console.log("x is less than 3");
// } else if (x === 2) {
//   console.log("x is equal to 2");
// } else {
//   console.log("nothing here");
// }

// let name = "lancelot";

// switch (name) {
//   case "freeman":
//     console.log("hello freeman welcome to class");
//     break;
//   case "godbless":
//     console.log("hello godbless welcome to class");
//     break;
//   case "lancelot":
//     console.log("hello lancelot welcome to class");
//     break;
//   default:
//     console.log("does not match");
// }

// ternary operator
// let x = 10;
// console.log(x === 10 ? "x is equal to 10" : "x is not equal to 10");

// hoisiting

// x = 10;

// console.log(x);

// let x;

// loops

// for loop;

// for (initialiser; boudary; increment) {
//   codeblock;
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// write a prgram that will print out the
// even numbers from  1 to 20

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// while loop

// i = 0;

// while (i < 20) {
//   console.log(i);
//   i++;
// }

// while (i < 20) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// reference data types
// array and object

// var names = ["glory", "emmanuel", "edesiri", "martha", "Diana", "Merlin"];

// for (let i = 0; i < names.length; i++) {
//   console.log(i + 1, names[i]);
// }

// let person = {
//   name: "Godbless",
//   school: "uniben",
//   age: 75,
//   isMarried: true,
//   isAdmin: false,
// };

// person.status = "user";

// for (let i in person) {
//   console.log(i, " : " + person[i]);
// }

// var names = ["glory", "emmanuel", "edesiri", "martha", "Diana", "Merlin"];

// for (let name of names) {
//   console.log(name);
// }

// names.forEach((name, i) => {
//   console.log(i + 1, name);
// });

// names.map((name, i) => {
//   console.log(i + 1, name);
// });

// var x = 0;

// while (x <= 20) {
//   // do something
//   console.log(x);
//   x++;
// }

// prompt
// var name = prompt("what is your name");
// alert(name + " you are welcome to edo hub");

// var name = prompt("what is your name");
// alert(name + " you are welcome to my investment platform");
// var amount = prompt("Enter the amount you would like to invest");
// alert("thank you for investing, your money is now " + "N" + amount * 2);

// write a program that will take two names
// first should be your name
// second should be your surname
// condition: if last letter of name is
// not equal to last letter of surname it should
// alert condition not met, but if last letter of
// name is equal to last letter of surname it
// should print good job on your console.

// let name = prompt("what is your name?");
// let surName = prompt("what is your surName?");

// if (name[name.length - 1] === surName[surName.length - 1]) {
//   console.log("Good Job");
// } else {
//   alert("condition not met");
// }

// prompt
// var name = prompt("what is your name?");
// if (name === "") {
//   alert("please add a name");
// } else {
//   alert(name + " you are welcome to edo hub");
// }

// var name = prompt("what is your name?");
// while (name === "") {
//   alert("please add a name");
//   name = prompt("you must add a name!");
// }

// var name = "godbless";

// var email = "ejovwogfreeman007@gmail.com";

// console.log(email.split("@")[0]);

// var arr = ["godbless", "freeman", "mark"];

// const sliced = arr.slice(0, 1);

// console.log(sliced);

// console.log(arr);

// var arr = ["godbless", "freeman", "mark"];

// const spliced = arr.splice(0, 1);

// console.log(spliced);

// console.log(arr);
