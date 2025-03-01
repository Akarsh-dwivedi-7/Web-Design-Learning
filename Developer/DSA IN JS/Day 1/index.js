// Sum of 2 integer

// let a = 10;
// let b = 20;
// console.log(a + b);

// // Concatenation
// let x = 10;
// let y = "20";
// console.log(typeof(x + y)); 
// console.log("Sum of 10 and 20 is " + a+ b);
// console.log("Sum of 10 and 20 is " + (a+ b));
// console.log(a + b + " is Sum of 10 and 20");

// // Type Coercion
// console.log("1" - 1);
// console.log("1" * 1);
// console.log("1" / 1);

// Prompt Function
// let age = prompt("What is your age");
// console.log(age);
// console.log(typeof(age));

// let age1 = Number(prompt("What is your age")); // type casting --> String <-> Number, Nuber <-> String
// console.log(age1);
// console.log(typeof(age1));

// let age2 = prompt("What is your age");
// age2 = Number(age2); 
// console.log(age2);
// console.log(typeof(age2));

// Swap two variables via 3 methods

// 1st Method -->
// let p = 10;
// let q = 20;
// let r;

// r = p; // r = 10, p = 10
// p = q; // p = 20, q = 20
// q = r; // q = 10, r = 10
// // console.log("The value of p = " +p);
// // console.log("The value of q = " +q);

// 2nd Method -->
// let a = 10;
// let b = 20;
// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20
// // console.log(a, b);

// 3rd Method -->
// let x = 10;
// let y = 20;

// [x, y] = [y, x];
// console.log(x, y)

// Operator

// 1.Arithmetic --> + - * / %
// x = 10;
// y = 2;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y); // Q
// console.log(x % y); // R

// console.log(Math.floor(7 / 2));

// 2.Rational --> > < <= >= !== = == ===
// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 <= 10);
// console.log(5 >= 10);
// console.log(10 !== 10);

// var a = 12; // assignment operator
// console.log(12 == 12);
// console.log(12 == "12"); // Only Check Value
// console.log(12 === "12"); // Check both type and value

// 3.Logical --> && ||
// console.log(10>9 && 9<11);
// console.log(10>9 && 9<1);
// console.log(1>9 && 9<11);
// console.log(10>90 && 9<1);

// console.log(10>9 || 9<11);
// console.log(10>9 || 9<1);
// console.log(1>9 || 9<11);
// console.log(1>9 || 9<1);

// 4.Unary --> ++ => Increment,  -- => Decrement
// let i = 11;
// i = i++ + ++i;
// // console.log(i);

// let a = 11, b = 22;
// let c = a + b + a++ + b++ + ++a + ++b
// // console.log("a=" + a);
// // console.log("b=" + b);
// // console.log("c=" + c);

// let j = true;
// j++;
// // console.log(j); // 2 because true = 1

// let k = 11++;
// // console.log(k); // Invalid left-hand side expression in postfix operation

// let m = 11;
// // let n = --(m++); // Invalid left-hand side expression in postfix operation


/*                                                  Math Functions                                                           */

// console.log(Math.round(10.6));
// console.log(Math.round(10.4));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.8));
// console.log(Math.trunc(18.98));
// console.log(Math.pow(2, 2)); // 2^2
// console.log(Math.sqrt(49)); 
// console.log(Math.cbrt(8));
// console.log(Math.abs(-5));
// console.log(Math.max(78, 69, 55,85));
// console.log(Math.min(78, 69, 55,85));
// console.log(Math.floor((Math.random()*9000)+1000)); // 0 to 1

// let f = 85.06243
// console.log(f.toFixed(2));


// Problems

// Calculate area and perimeter of rectangle
// area o rectangle = l * b
// let l = 3;
// let b = 4;
// console.log(l * b);

// Perimeter of rectangle = 2(l + b)
// console.log(2*(l + b)); 


// area of triangle by heron's Formula
// let a = 5;
// let b = 4;
// let c = 3;
// let s = (a + b + c)/2
// console.log(s); 

// console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)));


// Circumference of Circle
// let R = 12;
// console.log(Number(Math.floor(2 * Math.PI * R)));






























































