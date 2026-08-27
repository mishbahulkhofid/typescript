/**
 * An online store stores product prices in an array in below.
 * The finance department needs to calculate the total purchase amount.
 * Instead of calculating the total directly in the main program, create reusable function.
 * The function should return the total price.
 * Student Tasks
 * 1. Create a function named calculateTotalPrce.
 * 2. The function receives an array of pirices.
 * 3. Use a loop to calculate the total.
 * 4. Return the total price.
 * 5. Display the returned value.
 */
const prices = [
    250000,
    180000,
    95000,
    420000,
    125000
];

function calculateTotalPrice(prices:number[]):number{
    let total = 0;
    for(let price of prices){
        total += price
    }return total;
}
const totalPrice = (calculateTotalPrice(prices))
console.log(`Total Pembelian:Rp${totalPrice}`)