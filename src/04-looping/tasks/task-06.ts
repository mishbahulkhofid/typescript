/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStock = 0;
let lowStock = 0;
let safeStock = 0;
let totalQuantity = 0;

for(let i=0;i < stocks.length;i++){
    if (stocks[i] === 0){
        outOfStock++;
    }else if (stocks[i] < 10){
        lowStock++;
    }else{
        safeStock++
    }
    totalQuantity += stocks[i];
}
console.log("Out of Stock:",outOfStock);
console.log("Low Stock:",lowStock);
console.log("Toatal Quantity:",totalQuantity);
console.log("Average: "+totalQuantity/stocks.length)