/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

interface Student {
  studentId: string;
  name: string;
  age: number;
  isActive: boolean;
}

const student1: Student = {
  studentId: "ID123567",
  name: "Ronaldo",
  age: 16,
  isActive: true,
};

const student2: Student = {
  studentId: "ID124568",
  name: "Lionel Messi",
  age: 17,
  isActive: true,
};

const student3: Student = {
    studentId : "ID178908",
    name : "Neymar",
    age : 19,
    isActive : true
};

const students = [student1, student2, student3];

console.table(students);
