function makan(nama:string){
  console.log(`${nama} sudah makan`)
}

function pesanMakanan(callback:Function){
  console.log("Sedang memasak")
  callback("Budi")
}

pesanMakanan(makan)

function prosesnya(callback: Function) {
  console.log("Mulai...");
  callback("Hallo,Ini Callback")
  console.log("Selesai.");
}

function pesanku(teks:string) {
  console.log(teks);
}
prosesnya(pesanku)
// panggil prosesnya() dengan pesanku sebagai callback


function cekSemuaNilai(nilai:number[],callback:(n:number) => void){
  for(let i = 0; i < nilai.length; i++){
    callback(nilai[i]);
  }
}
const daftarNilai = [90, 60, 75, 40, 88];

// Kebutuhan 1: cetak status lulus/tidak
function cekLulus(n: number) {
  if (n >= 75) {
    console.log(`${n} → LULUS`);
  } else {
    console.log(`${n} → TIDAK LULUS`);
  }
}

cekSemuaNilai(daftarNilai, cekLulus);