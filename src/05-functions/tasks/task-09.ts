/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.

const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];*/

interface Patiens{
    id:string;
    name:string;
    age:number;
    department:string;
    admitted: boolean;
    bill:number;
}

const patients:Patiens[]=[
  { id: "PT001", name: "Alya", age: 17, department: "Pediatrics", admitted: true, bill: 850000 },
  { id: "PT002", name: "Budi", age: 45, department: "Cardiology", admitted: false, bill: 1200000 },
  { id: "PT003", name: "Citra", age: 68, department: "Cardiology", admitted: true, bill: 2500000 },
  { id: "PT004", name: "Dimas", age: 33, department: "Orthopedics", admitted: true, bill: 640000 },
  { id: "PT005", name: "Eka", age: 14, department: "Pediatrics", admitted: false, bill: 350000 }
];


//1.Menghitung Total Seluruh Pasien
function totalCountPatiens(patients:Patiens[]):number{
    return patients.length;
}

//2.Menghitung seleuruh total 
function countAdmittedPatiens(patients:Patiens[]):number{
    let count = 0;
    for(let patient of patients){
        if(patient.admitted === true ){
            count++
        }
    }return count;
}

// 3. Menghitung jumlah pasien yang berstatus discharged (sudah pulang / tidak dirawat)
function countDischargedPatiens(patients:Patiens[]):number{
    let count = 0;
    for(let p of patients){
        if(p.admitted === false){
            count++
        }
    }return count;
}

//4.Menghitung jumlah pasien per departemen, hasilnya object { namaDepartemen: jumlah }
// dibuat generic (tidak hardcode nama departemen) supaya tetap valid walau data departemen berubah
function countpatientsDepartment(patients:Patiens[]):{[key:string]:number}{
    const result: Record<string, number> = {};
    for (let patient of patients){
        if(result[patient.department] === undefined){
            result[patient.department]=1;
        }else{
            result[patient.department]++;
        }
    }
    return result;
}

//5.Mencari tagihan rumah sakit tertinggi
function highestBill(patients:Patiens[]):number{
    let highest = patients[0].bill;
    for(let patient of patients){
        if(patient.bill > highest){
            highest = patient.bill;
        }
    }return highest;
}

//6.Mencari tagihan rumah sakit terendah
function lowestBill(patiens:Patiens[]):number{
    let lowest = patiens[0].bill;
    for(let patient of patients){
        if(patient.bill < lowest){
            lowest = patient.bill;
        }
    }return lowest;
}

// 7. Menghitung total pendapatan rumah sakit (jumlah seluruh bill)
function totalRevenue(patients:Patiens[]):number{
    let count = 0;
    for(let p of patients){
        count += p.bill;
    }return count;
}

//8.Menghitung Rata rata Tagihan
function AvgBill(patients:Patiens[]):number{
    if (patients.length === 0){
        return 0;
    }
    return totalCountPatiens(patients)/totalCountPatiens(patients)
}

// 9. Mengambil daftar nama pasien yang sedang admitted (dirawat)
function getAdmittedPatientNames(patients: Patiens[]): string[] {
    const names:string[] = [];
    for(let patient of patients){
        if (patient.admitted === true){
            names.push(patient.name);
        }
    }
    return names;
}

function printHospitalReport(patients: Patiens[]): void {
  console.log("=== Hospital Daily Report ===");
  console.log("Total Patients:", totalCountPatiens(patients));
  console.log("Admitted Patients:", countAdmittedPatiens(patients));
  console.log("Discharged Patients:", countDischargedPatiens(patients));
  console.log("Patients per Department:", countpatientsDepartment(patients));
  console.log("Highest Bill:", highestBill(patients));
  console.log("Lowest Bill:", lowestBill(patients));
  console.log("Average Bill:", AvgBill(patients).toFixed(2));
  console.log("Total Revenue:", totalRevenue(patients));
  console.log("Admitted Patient Names:", getAdmittedPatientNames(patients));
}

printHospitalReport(patients);