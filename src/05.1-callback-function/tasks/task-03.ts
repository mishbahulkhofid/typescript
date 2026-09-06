/**
 * An online store has the following products:
 */
type Product = {
    name:string,
    price:number,
}

const products:Product[] = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function productProcess(productList : Product[],callback: (product:Product)=>void){
    for(const product of productList){
        callback(product)
    }
}

function displayProduct(product:Product):void{
    console.log(`Product Name:${product.name} - Price:${product.price}`)
}

function displayExpensiveProduct(product:Product):void{
    if(product.price > 1000000){
       console.log(`Product Name:${product.name} - Price:${product.price}`)
     }
}

function displayDicountProduct(product:Product):void{
    if(product.price > 500000){
        const discount = product.price * 0.9;
        console.log(`Product Name:${product.name} - Original Price:${product.price}| Dicount:${discount}`)
    }
}

console.log("=======================================")
console.log("1. Display All Product ")
productProcess(products,displayProduct)
console.log("=======================================")
console.log("2. Display Expensive Product ")
productProcess(products,displayExpensiveProduct)
console.log("=======================================")
console.log("3. Display Products (> Rp500,000) with 10% Discount")
productProcess(products,displayDicountProduct)