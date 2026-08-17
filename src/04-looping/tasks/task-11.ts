import { copyFileSync } from "fs";

const customer = [
    {applicant: "Kante",montlyIncome: 100000 , creditScore: 670 ,exitingDebt: 70000 , permanenEmploye: true},
    {applicant: "Robinho",montlyIncome: 2000000 , creditScore: 150 ,exitingDebt: 800000 , permanenEmploye: false},
    {applicant: "Ronaldinho",montlyIncome: 8000000 , creditScore: 2050 ,exitingDebt: 850000 , permanenEmploye: true},
    {applicant: "Gullit",montlyIncome: 35000000 , creditScore: 1000 ,exitingDebt: 950000 , permanenEmploye: true},
    {applicant: "Garincha",montlyIncome: 500000 , creditScore: 700 ,exitingDebt: 540000 , permanenEmploye: false},
    {applicant: "Batistusta",montlyIncome: 40000000 , creditScore: 550 ,exitingDebt: 20000 , permanenEmploye: true},

 ]

 let Approved = 0;
 let Rejected = 0;
 let Manual = 0;
 let nameApproved:string[]=[];
 let nameReject:string[]=[];

 for(let i = 0;i < customer.length; i++){
    if (customer[i].montlyIncome >=8000000 && customer[i].creditScore >= 700){
        if (customer[i].exitingDebt <= 3000000 && customer[i].permanenEmploye === true){
            Approved++
            nameApproved.push(customer[i].applicant);
    }else{
        Manual++
    }
}else {
    Rejected++
    nameReject.push(customer[i].applicant);

}
}
console.log("Loan Approved: ",Approved)
console.log("Approved Name:",nameApproved.join(","))
console.log("Manual Review: ",Manual)
console.log("Loan Rejected: ",Rejected)
console.log("Rejected Name:",nameReject.join(","))