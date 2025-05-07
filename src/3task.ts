{
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = [];
        for (const arr of arrays) {
          for (const item of arr) {
            result.push(item);
          }
        }
        return result;
    }
      
    // Example usage
    console.log(concatenateArrays(["a", "b"], ["c"]));
    console.log(concatenateArrays([1, 2], [3, 4], [5]));
}