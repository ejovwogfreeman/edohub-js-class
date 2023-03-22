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

// break and continue

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
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

// let x = names.filter((x) => x !== "emmanuel");

// console.log(x);

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

// your assignment:
// wirte a program that will take a user input of a number
// and alert the sum of all the digits that make up the number

// e.g when a user enters 11 it will alert 2
// e.g when a user enters 555 it will alert 15
// e.g when a user enters 3256 it will alert 16

// let arrNum = [20, 30, 25, 19, 88, 100];

// let acc = 0;
// for (let i = 0; i < arrNum.length; i++) {
//   acc += arrNum[i];
// }
// console.log(acc);

// reduce

// console.log(arrNum.reduce((a, b) => a + b));

// js functions
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// syntax
// function functionName() {
//     codblock;
// }

// alert("Hello my web dev guys");

// function greet() {
//   alert("Hello my web dev guys");
// }

// greet();

// function addNum() {
//   console.log(5 + 5);
// }

// addNum();

// function greet(name) {
//   alert("Hello " + name + " good morning");
// }

// greet("Bella");

// function greet(name, time) {
//   alert("Hello " + name + " good " + time);
// }

// greet("Sandra", "afternaoon");

// const dateTime =
//   new Date().toDateString() + " | " + new Date().toLocaleTimeString();
// console.log(dateTime);

// const hour = new Date().getHours();
// if (hour > 0 && hour < 12) {
//   console.log("good morning");
// } else if (hour > 12 && hour < 16) {
//   console.log("good afternoon");
// } else if (hour > 16 && hour < 21) {
//   console.log("good evening");
// } else {
//   console.log("good night");
// }

// function addNums(x = 1, y = 1) {
//   console.log(x + y);
// }

// addNums(5, 8);

// function addNums(x, y) {
//   x = 1;
//   y = 1;
//   console.log(x + y);
// }

// addNums();

// let x = 1;
// let y = 1;
// function addNums() {
//   console.log(x + y);
// }

// addNums();

// function greet() {
//   return "hello wold";
// }

// console.log(greet());
// const greetMe = greet();
// console.log(greetMe);

// function greet() {
//   return "hello wold";
// }

// console.log(greet());

// a function to sum up an array number
// function addArrayNum(arr) {
//   let acc = 0;
//   for (let i = 0; i < arr.length; i++) {
//     acc = acc + arr[i];
//   }
//   return acc;
// }

// console.log(addArrayNum([2, 5, 90]));

// let num = prompt("Please enter any number");

// let arrNum = num.split("");

// let acc = 0;
// for (let i = 0; i < arrNum.length; i++) {
//   acc += Number(arrNum[i]);
// }
// alert("The sum of the digits of the number " + num + " is : " + acc);

// let sentence = "Hey good day";
// string
// slice(startIndex, endIndex);
// substring(startIndex, endIndex);
// substr(startIndex, length);

// console.log(sentence.substring(4, 8));

// array
// slice(startIndex, endIndex);
// splice(startIndex, length)

// let rooster = [];
// let name;

// function addName() {
//   name = prompt("Please add a name");
//   rooster.push(name);
// }

// function removeName() {
//   name = prompt("Please remove a name");
//   rooster.splice(rooster.indexOf(name), 1);
// }

// function displayNames() {
//   alert(rooster);
// }

// alert("Hello welcome to my school");

// let question = prompt("Would you like to register? y/n");

// var request;
// if (question === "y") {
//   while (request !== "quit") {
//     request = prompt("would you like to add, remove, display or quit?");
//     if (request === "add") {
//       addName();
//     } else if (request === "remove") {
//       removeName();
//     } else if (request === "display") {
//       displayNames();
//     } else if (request === "quit") {
//       alert("Thanks for participating");
//     } else {
//       alert("Not recognized");
//     }
//   }
// } else {
//   alert("please refresh to start again");
// }

// let name = ["godbless", "freeman", "mark"];

// // console.log(name.indexOf("godbless"));
// name.splice(name.indexOf("godbless"), 1);
// // rooster.splice(rooster.indexOf(name), 1);

// console.log(name);

// isLeapYear(2019);

// getNumers(10, 30, 40);
// x, y, z;

// assignment

// write a function that will take in any year and return this is a leapyear
// if the year is truly a leapyear and return this is not a leapyear if the
// year is not a leapyear
// e.g isLeapYear(2016) will print "this is a leapyear"
// e.g isLeapYear(2017) will print "this is not a leapyear"

// write a function that will take in three numbers n,x,y and return the
// first n multiples of y that are divisible by x
// e.g multiples(2, 5, 20) will return [20, 40];
// e.g multiples(3, 5, 6)) will return [30, 60, 90]

// NB: Leapyears are divisible by four, not divisible by 100, but divisible by 400
// i.e leapyears are divisible by 4 and are not divisible by 100 unless the year i have 4*100 which is 400
// function isLeapyear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 !== 0 || year % 400 === 0) {
//       console.log("leapyear");
//     } else {
//       console.log("not leapyear");
//     }
//   } else {
//     console.log("not leapyear");
//   }
// }

// function isLeapyear(year) {
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log("leapyear");
//   } else {
//     console.log("not leapyear");
//   }
// }

// let name = prompt("please enter a year");
// isLeapyear(name);

// function multiples(n, x, y) {
//   var arr1 = [];
//   var arr2 = [];
//   var arr3 = [];
//   for (let i = 1; i <= x * y; i++) arr1.push(x * i);
//   for (let i = 1; i <= x * y; i++) arr2.push(y * i);
//   arr3 = arr1.filter((element) => arr2.includes(element));
//   console.log(arr3.splice(0, n));
// }

// multiples(3, 5, 6);

// function LCM(x, y) {
//   var arr1 = [];
//   var arr2 = [];
//   var arr3 = [];
//   for (let i = 1; i <= x * y; i++) arr1.push(x * i);
//   for (let i = 1; i <= x * y; i++) arr2.push(y * i);
//   arr3 = arr1.filter((element) => arr2.includes(element));
//   console.log(`The L.C.M of ${x} and ${y} is: ${arr3[0]}`);
// }

// LCM(8, 12);

// function HCF(x, y) {
//   var arr1 = [];
//   var arr2 = [];
//   var arr3 = [];
//   for (let i = 1; i <= x; i++)
//     if (x % i === 0) {
//       arr1.push(i);
//     }
//   for (let i = 1; i <= y; i++)
//     if (y % i === 0) {
//       arr2.push(i);
//     }
//   arr3 = arr1.filter((element) => arr2.includes(element));
//   console.log(`The H.C.F of ${x} and ${y} is: ${arr3[arr3.length - 1]}`);
// }

// HCF(28, 21);

// function alpahbets(word) {
//   var wordObject = {};
//   var vowels = [];
//   var consonants = [];
//   let wordArray = word.split("");
//   for (let i = 0; i < wordArray.length; i++) {
//     if (
//       word[i] === "a" ||
//       word[i] === "e" ||
//       word[i] === "i" ||
//       word[i] === "o" ||
//       word[i] === "u"
//     ) {
//       vowels.push(word[i]);
//     } else {
//       consonants.push(word[i]);
//     }
//   }
//   wordObject = {
//     vowels,
//     consonants,
//   };
//   console.log(wordObject);
// }
// let name = prompt("please enter a word");
// alpahbets(name);

// More assignments on functions
// 1) Write a javascript function that would take a word and return an object with
// all the vowels and consonats of the word in this format:
// getWord("godbless")
// prints {vowels: ['o', 'e'], consonants: ['g', 'd', 'b', 'l', 's', 's']}

// 2) write a function to get the LCM of two numbers in this format:
// LCM(8, 12)
// prints The L.C.M of 8 and 12 is: 24

// 3) write a function to get the HCF of two numbers in this format:
// HCF(28, 21);
// prints The H.C.F of 28 and 21 is: 7

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 !== 0 || year % 400 === 0) {
//       console.log("leapyear");
//     }
//   } else {
//     console.log("not leapyear");
//   }
// }

// let year = prompt("please enter a year");

// isLeapYear(year);

// function getNumers(n, x, y) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];
//   for (let i = 1; i <= x * y; i++) {
//     arr1.push(x * i);
//   }
//   for (let i = 1; i <= x * y; i++) {
//     arr2.push(y * i);
//   }
//   arr3 = arr1.filter((e) => arr2.includes(e));
//   console.log(arr3.slice(0, n));
// }

// getNumers(12, 15, 20);

// function LCM(x, y) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];
//   for (let i = 1; i <= x * y; i++) {
//     arr1.push(x * i);
//   }
//   for (let i = 1; i <= x * y; i++) {
//     arr2.push(y * i);
//   }
//   arr3 = arr1.filter((e) => arr2.includes(e));
//   console.log(`The L.C.M of ${x} and ${y} is: ${arr3[0]}`);
// }

// LCM(15, 20);

// function HCF(x, y) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];
//   for (let i = 1; i <= x; i++) {
//     if (x % i === 0) {
//       arr1.push(i);
//     }
//   }
//   for (let i = 1; i <= y; i++) {
//     if (y % i === 0) {
//       arr2.push(i);
//     }
//   }

//   arr3 = arr1.filter((e) => arr2.includes(e));
//   console.log(`The H.C.F of ${x} and ${y} is: ${arr3[arr3.length - 1]}`);
// }

// HCF(300, 250);

// function getWord(word) {
//   let wordArr = word.split("");
//   let wordObj = {};
//   let vowels = [];
//   let consonants = [];
//   for (let i = 0; i < wordArr.length; i++) {
//     if (
//       wordArr[i] === "a" ||
//       wordArr[i] === "e" ||
//       wordArr[i] === "i" ||
//       wordArr[i] === "o" ||
//       wordArr[i] === "u"
//     ) {
//       vowels.push(wordArr[i]);
//     } else {
//       consonants.push(wordArr[i]);
//     }
//   }
//   wordObj = {
//     vowels,
//     consonants,
//   };
//   console.log(wordObj);
// }

// let word = prompt("please enter any word");

// getWord(word);

// arrow functions

// syntax
// const functionName= () => {
//     codeblock;
// }

// const greet = () => {
//   console.log("hello");
// };

// greet();

// const greet = (name, time) => {
//   console.log("Good " + time + " " + name + " welcome.");
// };

// greet("diana", "evening");

// const company = [
//   {
//     id: 1,
//     name: "google",
//     staffs: 23,
//     startYear: 1974,
//     isTech: true,
//   },
//   {
//     id: 2,
//     name: "facebook",
//     staffs: 13,
//     startYear: 2004,
//     isTech: true,
//   },
//   {
//     id: 3,
//     name: "gucci",
//     staffs: 37,
//     startYear: 1990,
//     isTech: false,
//   },
//   {
//     id: 4,
//     name: "amazon",
//     staffs: 15,
//     startYear: 1996,
//     isTech: true,
//   },
//   {
//     id: 5,
//     name: "microsoft",
//     staffs: 25,
//     startYear: 1975,
//     isTech: true,
//   },
//   {
//     id: 6,
//     name: "starlink",
//     staffs: 29,
//     startYear: 1999,
//     isTech: true,
//   },
//   {
//     id: 7,
//     name: "Nadia",
//     staffs: 30,
//     startYear: 2005,
//     isTech: false,
//   },
// ];

// console.log(company);

// assignment
// 1) return only the tech companies
// 2) claculate the total number of staffs in all the companies
// 3) return companies the starts before 2000
// 4) retrun the sum of staffs in the comapny with the highest number of staffs and the lowest of staffs
// 5) retrun the number of staffs in the oldest and the youngest company
// 7) return the companies with number of staffs greater than 30

// aswer 1
// for (let i = 0; i < company.length; i++) {
//   if (company[i].isTech === true) {
//     console.log(company[i]);
//   }
// }

// answer 2
// let acc = 0;
// for (let i = 0; i < company.length; i++) {
//   acc += company[i].staffs;
// }

// console.log(acc);

// answer 3
// for (let i = 0; i < company.length; i++) {
//   if (company[i].startYear < 2000) {
//     console.log(company[i]);
//   }
// }

// answer 4
// let staffArr = [];
// for (let i = 0; i < company.length; i++) {
//   staffArr.push(company[i].staffs);
// }
// staffArr.sort();
// console.log(staffArr[0] + staffArr[staffArr.length - 1]);

// answer 5
// let yArr = [];
// for (let i = 0; i < company.length; i++) {
//   yArr.push(company[i].startYear);
// }
// let oldest = yArr.sort()[0];
// let youngest = yArr.sort().pop();

// for (let i = 0; i < company.length; i++) {
//   if (company[i].startYear === oldest) {
//     console.log(`The oldest comany has ${company[i].staffs} number of staffs`);
//   } else if (company[i].startYear === youngest) {
//     console.log(
//       `The youngest comany has ${company[i].staffs} number of staffs`
//     );
//   } else {
//   }
// }

// js DOM
// Document Object Model

// console.log(document);

// single element selectors
// document.getElelmentById
// document.querySelector

// multiple element selectors
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelectorAll

// let h1 = document.getElementById("x");
// h1.style.fontSize = "100px";
// h1.style.color = "red";

// let sec = document.getElementById("sec");
// console.log(sec);

// let p = document.querySelector("p");
// p.style.color = "red";

// let ele = document.querySelectorAll("#x");
// console.log(ele);
// ele.style.color = "red";
// for (let i = 0; i < ele.length; i++) {
//   ele[i].style.color = "red";
// }

// ele.forEach((x) => (x.style.color = "red"));

// let x = document.getElementsByClassName("first");
// console.log(x);

// let y = document.querySelector(".first");
// console.log(y);

// let btn = document.getElementById("btn");

// let body = document.getElementById("body");

// btn.addEventListener("click", () => {
//   if (btn.textContent === "dark") {
//     btn.textContent = "light";
//     body.style.background = "black";
//     body.style.color = "white";
//   } else {
//     btn.textContent = "dark";
//     body.style.background = "white";
//     body.style.color = "black";
//   }
// });

// textContent
// innerText
// innerHTML

// let h1 = document.getElementById("text");

// console.log(h1.innerHTML);

// h1.innerText = "<h6>Lets learn JS</h6>";

// document.getElementById("btn").addEventListener("click", () => {
//   alert("hello world");
// });

// let on = document.getElementById("on");
// let off = document.getElementById("off");
// let bulb = document.getElementById("bulb");

// on.addEventListener("click", () => {
//   bulb.src = "bulbon.gif";
// });

// off.addEventListener("click", () => {
//   bulb.src = "bulboff.gif";
// });

// let btn = document.getElementById("btn");
// let bulb = document.getElementById("bulb");

// btn.addEventListener("click", () => {
//   if (btn.textContent === "on") {
//     btn.textContent = "off";
//     bulb.src = "bulbon.gif";
//   } else {
//     btn.textContent = "on";
//     bulb.src = "bulboff.gif";
//   }
// });

// basic form validation

let form = document.getElementById("form");
let nameIput = document.getElementById("nameInput");
let emailIput = document.getElementById("emailInput");

// form.addEventListener("submit", (e) => {
//   if (nameIput.value === "" || emailIput.value === "") {
//     alert("please fill all fields");
//   } else {
//     e.preventDefault();
//     console.log(nameIput.value);
//     console.log(emailIput.value);
//   }
//   nameIput.value = "";
//   emailIput.value = "";
// });

// form.addEventListener("submit", (e) => {
//   if (nameIput.value === "" || emailIput.value === "") {
//     return alert("please fill all fields");
//   }
//   e.preventDefault();
//   console.log(nameIput.value);
//   console.log(emailIput.value);

//   nameIput.value = "";
//   emailIput.value = "";
// });

// add => push, unshift, splice
// remove => pop, shift, splice

// let btn = document.getElementById("btn");
// let body = document.getElementById("body");
// btn.addEventListener("click", blackBtn);

// function blackBtn() {
//   body.style.background = "black";
//   getAlert();
// }

// function getAlert() {
//   alert("hello world");
// }

// btn.addEventListener("click", () => {
//   if (btn.textContent === "dark") {
//     btn.textContent = "light";
//     blackBg();
//   } else {
//     btn.textContent = "dark";
//     whiteBg();
//   }
// });

// function blackBg() {
//   body.style.backgroundColor = "black";
//   body.style.color = "white";
// }
// function whiteBg() {
//   body.style.backgroundColor = "white";
//   body.style.color = "black";
// }
