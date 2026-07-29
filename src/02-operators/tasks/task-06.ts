/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const totalPlayingTime = 7 * 60 + 35;
const remainingMinutes = totalPlayingTime % 60;
const totalBilledHours = Math.floor(totalPlayingTime / 60);
const totalPaymentBeforeDiscount = totalBilledHours * 8000;
const discountAmount = totalBilledHours > 5 ? totalPaymentBeforeDiscount * 0.15 : 0;
const finalPayment = totalPaymentBeforeDiscount - discountAmount;

console.log("Total playing time in minutes:", totalPlayingTime);
console.log("Remaining minutes after full hours:", remainingMinutes);
console.log("Total billed hours:", totalBilledHours);
console.log("Total payment before discount:", totalPaymentBeforeDiscount);
console.log("Discount amount:", discountAmount);
console.log("Final payment:", finalPayment);
