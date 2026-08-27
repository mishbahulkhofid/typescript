/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
interface Attendance{
    name:string;
    present:boolean;
}
const attendances:Attendance[] =[
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(attendances:Attendance[]){
    let absentStudents: string[] = []
    let presentStudent: string[] = []
    let totalPresent = 0;
    let totalAbsent = 0;

    for (let attendance of attendances){
        if (attendance.present === true){
            totalPresent++ 
            presentStudent.push(attendance.name)
        }else{
            totalAbsent++
            absentStudents.push(attendance.name)
        }
    }
    console.log(`Total Hadir: ${totalPresent}`);
    console.log(`Total Tidak Hadir: ${totalAbsent}`);
    console.log(`Siswa Tidak Hadir: ${absentStudents.join(", ")}`);
    console.log(`Siswa Hadir: ${presentStudent.join("," )}`)
}printAttendanceReport(attendances)
