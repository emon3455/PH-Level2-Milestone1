{
    // OOP --> Inheritance

    // parect class
    class Person{
        constructor(public name:string, public age: number, public address: string){
        }
        getLocation(){
            console.log(`${this.name} lives in ${this.address}`); 
        }
    }

    class Student extends Person{
        constructor(name: string, age:number, address: string, public studentId: number){
            super(name, age, address);
        }
        getStudy(){
            console.log(`${this.name} is studying`);
        }
    }

    class Teacher extends Person{
        constructor(name: string, age:number, address: string, public noOfClass: number){
            super(name, age, address);
        }
        getStudy(){
            console.log(`${this.name} takes ${this.noOfClass} classes`);
        }
    }

    const student = new Student("John", 20, "Dhaka", 101);
    const teacher = new Teacher("Smith", 35, "Dhaka", 5);
    student.getLocation(); 
    student.getStudy();
    teacher.getLocation();
    teacher.getStudy();

}