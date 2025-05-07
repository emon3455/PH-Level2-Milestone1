{
    function processValue(value: string | number): number{
        if(typeof value ==="number"){
            return value * 2
        }
        return value.length
    }
    console.log(processValue("hello")); // Output: 5
    console.log(processValue(10)); // Output: 20
}