{
    // polymorphism -> bohurupi

    class Person {
        getSleep(){
            console.log('I do sleep for 8 Hour');     
        }
    }

    class Student extends Person{
        getSleep(){
            console.log('I do sleep for 7 Hour');     
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log('I do sleep for 6 Hour');     
        }
    }

    const getSleepingHour = (input: Person)=>{
        input.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepingHour(person1)
    getSleepingHour(person2)
    getSleepingHour(person3)

}