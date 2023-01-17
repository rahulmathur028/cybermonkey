//nested if else statement
// let a = prompt("hey whats your age ?");
// if (a <= 0) {
//     alert("this is invalid age");
// } else if (a < 9) {
//     alert("this is invalid age and you are kid");

// } else if (a < 18 && a >= 9) {
//     alert("this is about to invalid age keep on try");

// } else {
//     alert("this is valid age and you can");

// }
// console.log("you can", (a >= 18 ? "vote" : "not vote"));

// let age = prompt("what is your age ?");
// switch (age) {
//     case '12':
//         console.log("your age is 12");
//         break;
//     case '13':
//         console.log("your age is 13");
//         break;
//     case '14':
//         console.log("your age is 14");
//         break;
//     case '15':
//         console.log("your age is 15");
//         break;
//     case '16':
//         console.log("your age is 16");
//         break;
//     default:
//         console.log("your age is not valid");
// }

// let num = prompt("Type here the number-");
// num = Number.parseInt(num)
// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("your num is divisible by 2 & 3");
// } else {

//     console.log("your num is not divisible by 2 & 3");
// }

// let num = prompt("Type here the number-");
// num = Number.parseInt(num)
// if (num % 2 == 0) {
//     console.log("your num is divisible by 2");
// } else if (num % 3 == 0) {

//     console.log("your num is divisible by 3");
// } else {
//     console.log("your num is not divisible by 2 nor 3");

// }

// let age = 17;
// let a = age >= 18 ? "you can vote." : "you can not vote.";
// console.log(a);


// let sum = 0;
// let n = prompt("Enter the value of n")
// for (let i = 0; i < n; i++) {
//     sum += (i + 1);
// }
// // console.log("sum of first " + n + " natural numbers is " + sum)

// let factorial = 1;
// let n = prompt("Enter the value of n");
// for (let i = 1; i < n; i++) {
//     factorial *= (i + 1);
// }

// console.log("factorial of first " + n + " natural numbers is " + factorial)

let obj = {
    rahul: 100,
    mathur: 90,
    vicky: 80,
    bhai: 70
}
for (let b in obj) {
    console.log("marks of " + b + " are " + obj[b])
}

for (let b of 'rahul') {
    console.log(b)
}