{
    // 

    type user1 = {
        name: string,
        age: number,
        dob: string
    }

    interface user2 {
        name: string;
        age: number;
        dob: string;
    }

    interface user2 {
        gender: "Male" | "Female"
    }

    const emon: user2 = {
        name: "Emon",
        age: 24,
        dob: "05/03/2002",
        gender: "Male"
    }

    interface user3 {
        role: "Admin" | "User"
    }

    interface user4 extends user2, user3 {}


    // Generic type

    // for array
    type GenericArray<T> = Array<T>

    const rolleNumber: GenericArray<number> = [1,2,3,4,5,6];
    const skills: GenericArray<string> = ["Javascript","TypeScript","Express"]

    const manager: GenericArray<{name:string,salary: number}> = [
        {
            name:"Emon",
            salary: 27000,
        },
        {
            name:"Ariyan",
            salary: 30000,
        },
    ]

    // generic tuple
    type genericTuple<x, y> = [x, y]

    const human: genericTuple<string, string> = ["Emon", "Elina"]

    const humanWithId: genericTuple<number, {name:string, age:number}> = [1234, {name:"Emon", age: 24}]


    // 
}