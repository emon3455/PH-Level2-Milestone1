// simple/premitive data types

// string
let fullName : string = "Emon";
// number
let age : number = 24
// boolean
let isAdmin:boolean = true
// null
let x: null = null
// undefined
let y: undefined = undefined

console.log(`My Name is: ${fullName}, I am ${age} yers old. He is a ${isAdmin ? "Admin" : "Not a Admin"}`);

// non-premitive data type
let friends: string[] = ["Emon", "Elina", "Sajjad", "Mahmudul", "Nabil"]
friends.push("Mohiny")

console.log("All Of My Frields:");
friends.forEach(element => {
    console.log(element);
});

let friendsAge: number[] = [1,2,3,4,5,7]

// tuple
let person: [string,number,boolean] = ["Emon", 10, true]

// Refere


 