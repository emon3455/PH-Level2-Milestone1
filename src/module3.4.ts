{
    // instanceof Guard
    class Animal{
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makesound(){
            console.log("Animal sound");
        }

    }

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species);
        }
        makeBark(){
            console.log("Bark Bark");
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species);
        }
        makeMeow(){
            console.log("Meow Meow");
        }
    }

    const dog = new Dog("Mr. Dog", "Dog");
    const cat = new Cat("Mr. Cat", "Cat");
    const normalAnimal = new Animal("Mr. Normal", "Normal Animal");

    const getDog = (animal: Animal): animal is Dog=>{
        return animal instanceof Dog;
    }
    const getCat = (animal: Animal): animal is Cat =>{
        return animal instanceof Cat;
    }


    const getAnimal = (animal: Animal)=>{
        if(getDog(animal)){  
            animal.makeBark();
        }else if(getCat(animal)){
            animal.makeMeow();      
        }
        else{
            animal.makesound();
        }
    }

    getAnimal(dog);
    getAnimal(cat);
    getAnimal(normalAnimal);

    // 
}