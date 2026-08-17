/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000];

// Total sales
let total = 0;
for (let i = 0; i < sales.length; i++) {
  total += sales[i];
}

// Transaksi tertinggi
let highest = sales[0];
for (let i = 1; i < sales.length; i++) {
  if (sales[i] > highest) {
    highest = sales[i];
  }
}

// Transaksi terendah
let lowest = sales[0];
for (let i = 1; i < sales.length; i++) {
  if (sales[i] < lowest) {
    lowest = sales[i];
  }
}

// Transaksi >= 300k
let countAbove300k = 0;
for (let i = 0; i < sales.length; i++) {
  if (sales[i] >= 300000) {
    countAbove300k++;
  }
}

// rata-rata
const average = total / sales.length;

console.log("Total:", total);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Count >= 300k:", countAbove300k);
console.log("Average:", average);



const tes = [12,23,21,3]

let hasil = 0
for (let i = 0; i < tes.length; i++) {
  hasil += tes[i];
}

console.log(hasil)
