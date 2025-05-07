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
    // newCar1.startEngine()   
    // newCar1.move()
    // newCar1.stopEngine()


    // Abstract using Abstract class

    abstract class Vehicle2{
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;

    }

    class Car2 extends Vehicle2{
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

    const newCar2 = new Car2()
    newCar2.startEngine()
    newCar2.move()
    newCar2.stopEngine()

}