{

    // Asynchronous Typescript

    // api calling
    type Post = {
        id: number;
        userId: number;
        title: string;
        body: string;
    }
    const fetchData = async (): Promise<Post> =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        return data;
    }
    (async () => {
        const post = await fetchData();
        console.log(post);
    })();
    

    // custom async await simulation:
    const createPromise = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            const data = "Hello World!";
            if(data) {
                resolve(data);
            }else{
                reject("Error: No data found!");
            }
        });
    }

    const showData = async (): Promise<string> =>{
        try {
            const data = await createPromise();
            return data // Hello World!
        } catch (error) {
            return "Something Went Wrong!"; // Error: No data found!
        }
    }
    showData();

    // 
}