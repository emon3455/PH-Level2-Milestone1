{
    // Abstraction class

    // We can do the Abstract Implementation using Abstract class as well as Interface


    // Abstract using Interface
    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log("Car engine started");
        }
        stopEngine(): void {
            console.log("Car engine stopped");
        }
        move(): void {
            console.log("Car is moving");
        }
    }

    const newCar1 = new Car1()
    newCar1.startEngine()   
    newCar1.move()
    newCar1.stopEngine()

}