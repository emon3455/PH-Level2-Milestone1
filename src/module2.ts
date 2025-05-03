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


    


    // 
}