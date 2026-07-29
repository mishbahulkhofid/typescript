/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

interface Registration {
    studentId: string;
    name: string;
    gradeLevel: number;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    paymentCompleted: boolean;
}

const registration1: Registration = {
    studentId: "ST2023001",
    name: "Tobey Maguire",
    gradeLevel: 9,
    courseId: "COURSE001",
    courseTitle: "Programming Fundamentals",
    instructorName: "Jane Smith",
    totalLearningHours: 200,
    registrationDate: "2023-08-01",
    paymentCompleted: true,
};

const registration2: Registration = {
    studentId: "ST2023002",
    name: "Andrew Garfield",
    gradeLevel: 10,
    courseId: "COURSE002",
    courseTitle: "Data Structures and Algorithms",
    instructorName: "John Doe",
    totalLearningHours: 180,
    registrationDate: "2023-08-15",
    paymentCompleted: false,
};

const registration3: Registration = {
    studentId: "ST2023003",
    name: "Tom Holland",
    gradeLevel: 11,
    courseId: "COURSE003",
    courseTitle: "Web Development",
    instructorName: "Jane Smith",
    totalLearningHours: 160,
    registrationDate: "2023-08-22",
    paymentCompleted: true,
};


console.log("======= Registration 1 ========");
console.log("Registration 1:", registration1);
console.log("======= Registration 2 ========");
console.log("Registration 2:", registration2);
console.log("======= Registration 3 ========");
console.log("Registration 3:", registration3);