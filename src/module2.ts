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

    
    // interface -> generic

    interface Developer < T, X=null>{
        name: string;
        pc:{
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike ?: X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }
    type AppleWatch = {
        brand: string;
        model: string;
        display: string;
        hertAttackDetect: boolean;
        sleepDetect: boolean;
    }
    type OgBike = {
        brand: string;
        color: string;
        speed: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Ariyan",
        pc:{
            brand: "Asus",
            model: "YP-100",
            releaseYear: 2000,
        },
        smartWatch:{
            brand: "Hyolio",
            model: "ap-100",
            display: "Amulate",
        }
    }

    const richDeveloper: Developer <AppleWatch, OgBike> = {
        name: "Emon",
        pc:{
            brand: "Apple",
            model: "Mac-Mini",
            releaseYear: 2025,
        },
        smartWatch:{
            brand: "Hyolio",
            model: "ap-100",
            display: "Amulate",
            hertAttackDetect: true,
            sleepDetect: true
        },
        bike:{
            brand: "Yamaha",
            color: "Black",
            speed: "1200 CC"
        }
    }


    // 
}