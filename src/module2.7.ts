{
    //

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
        bus: string;
    }

    type owner = "bike" | "car" | "ship" | "bus";

    type owner2 = keyof Vehicle; // "bike" | "car" | "ship" | "bus" 

    const getPropertyValue = <X, Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }

    const user = {
        name:"Emon",
        age: 24,
        address: "Dhaka, Bangladesh",
    }

    const car ={
        mode:"Toyota",
        year: 2000,
    }

    const result1 = getPropertyValue(user, "name") // Emon
    console.log(result1); // Emon
    const result2 = getPropertyValue(car, "mode") // Toyota 
    console.log(result2); // Toyota
    
    

    // 
}