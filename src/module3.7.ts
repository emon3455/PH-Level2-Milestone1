{
    // static

    class Counter {
        static count: number = 0;

        increment(){
           return (Counter.count = Counter.count + 1)
        }
        decrement(){
            return (Counter.count = Counter.count - 1)
        }

    }

    const newCounter1 = new Counter()
    console.log(newCounter1.increment());

    const newCounter2 = new Counter()
    console.log(newCounter2.increment());
    

}