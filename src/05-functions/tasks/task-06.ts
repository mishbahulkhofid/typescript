/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

import { off } from "node:cluster";
import { Socket } from "node:dgram";
import { startCpuProfile } from "node:v8";

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (let n of sales) {
    total += n;
  }
  return total;
}

function findHighestTransaction(sales: number[]): number {
  let tertinggi = sales[0];
  for(let n of sales){
    if(n > tertinggi)
      tertinggi = n
  }return tertinggi;
}

function findLowestTransaction(sales: number[]): number {
  let terendah = sales[0];
  for(let n of sales){
    if(n < terendah)
      terendah = n
  }return terendah;
}

function calculateAverageSale(sales: number[]): number {
  let total = 0;
  for(let n of sales){
    total += n
  }return total/sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let count = 0;
  for (let n of sales) {
    if (n > minimumAmount) {
      count++;
    }
  }return count;
}

// Display dashboard
console.log("=== Daily Sales Dashboard ===");
console.log("Total Sales: Rp" + calculateTotalSales(sales).toLocaleString('id-ID'));
console.log("Highest: Rp" + findHighestTransaction(sales).toLocaleString('id-ID'));
console.log("Lowest: Rp" + findLowestTransaction(sales).toLocaleString('id-ID'));
console.log("Average: Rp" + calculateAverageSale(sales).toLocaleString('id-ID'));
console.log("Transactions > Rp500,000: " + countLargeTransactions(sales, 500000));