{
    // OOP


    // Class and Object
    class Animal{

        constructor(public name: string, public species: string, public sound: string){
        }

        makeSound(){
            console.log(`${this.name} makes ${this.sound} sound.`);
        }

    }
    const cat = new Animal("Cat", "Mammal", "Meow");

    cat.makeSound()
    


    // 
}