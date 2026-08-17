/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];


let pesananReady = 0;
let pesananNoReady = 0;
let pesananWaitStock = 0;
let idPesanan:string[]=[];

for (let i = 0; i < orders.length; i++){
  if (orders[i].paid === true && orders[i].stockAvailable === true ){
    pesananReady ++
    idPesanan.push(orders[i].id)
  }else if(orders[i].paid === false){
    pesananWaitStock++
  }else{
    pesananNoReady++
  }
}
console.log("Pesanan Siap Dikirim: ",pesananReady);
console.log("Pesanan Belum Dibayar: ",pesananNoReady);
console.log("Pesanan Menunggu Stock: ",pesananWaitStock);
console.log("ID Pesanan Siap Dikirim: ",idPesanan);
 

