"use strict";
// simple/premitive data types
// string
let fullName = "Emon";
// number
let age = 24;
// boolean
let isAdmin = true;
// null
let x = null;
// undefined
let y = undefined;
console.log(`My Name is: ${fullName}, I am ${age} yers old. He is a ${isAdmin ? "Admin" : "Not a Admin"}`);
// non-premitive data type
let friends = ["Emon", "Elina", "Sajjad", "Mahmudul", "Nabil"];
friends.push("Mohiny");
console.log("All Of My Frields:");
friends.forEach(element => {
    console.log(element);
});
