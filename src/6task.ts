{
    interface Product {
        name: string;
        price: number;
      }
      
    function getMostExpensiveProduct(products: Product[]): Product | null{
        if(products.length===0){
            return null
        }else{
            let expensiveProduct = products[0];
            products.forEach((item)=>{
                if(item.price > expensiveProduct.price){
                    expensiveProduct = item
                }
            })
            return expensiveProduct
        }
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
    console.log(getMostExpensiveProduct(products));

}