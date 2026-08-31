/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
interface Student{
  name:string;
  major:string;
  active:boolean
}

const students:Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: Student[]):number{
  let count = 0;
  for(let student of students){
    if(student.active === true){
      count++
    }
  }return count;
}

function countInactiveStudents(students: Student[]):number{
  let count = 0;
  for(let student of students){
    if(student.active === false){
      count++
    }
  }return count;
}

function countStudentsByMajor(students:Student[],major:string){
  let count = 0;
  for(let student of students){
    if  (student.major === major){
      count++
    }
  }return count;
}

// PENTING: string di bawah ini harus SAMA PERSIS dengan nilai "major" di data students
// typo sedikit saja (misal "Engginering" vs "Engineering") akan membuat hasilnya 0
function printEnrollmentReport(students:Student[]){
  console.log("=== University Enrolment Report");
  console.log("Total Student:",students.length);// .length = properti bawaan array, jumlah total elemen
  console.log("Active Student:",countActiveStudents(students));
  console.log("Inactive Student:",countInactiveStudents(students))
  console.log("Software Engginering:",countStudentsByMajor(students,"Software Engineering"))
  console.log("Network Engginering:",countStudentsByMajor(students,"Networking"))
  console.log("Multimedia",countStudentsByMajor(students,"Multimedia"))  
}
printEnrollmentReport(students)