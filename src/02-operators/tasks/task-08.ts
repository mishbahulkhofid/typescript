/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640;
const currentMeter: number = 25892;
const electricityPricepkWh: number = 1650;
const solarPanelInstall: boolean = true;
const energySafeMode: boolean = false;

// Total pemakaian energi (kWh)
const totalEnergyConsumption: number = currentMeter - previousMeter;

// Tagihan dasar sebelum diskon
const baseBill: number = totalEnergyConsumption * electricityPricepkWh;

// Perhitungan diskon
let discountRate: number = 0;
if (solarPanelInstall) {
  discountRate += 0.20;
}
if (energySafeMode) {
  discountRate += 0.05;
}

const discountAmount: number = baseBill * discountRate;
const finalBill: number = baseBill - discountAmount;

// Kelayakan Program Green Energy
const greenEnergyEligible: boolean = solarPanelInstall && totalEnergyConsumption < 300 && energySafeMode;

// Output
console.log("Total Pemakaian Energi (kWh):", totalEnergyConsumption);
console.log("Tagihan Dasar (Rp):", baseBill);
console.log("Persentase Diskon:", `${discountRate * 100}%`);
console.log("Jumlah Diskon (Rp):", discountAmount);
console.log("Tagihan Akhir (Rp):", finalBill);
console.log("Layak Program Green Energy:", greenEnergyEligible);
