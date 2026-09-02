/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
interface Enrolment {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
}

const enrollments: Enrolment[] = [
    { student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38 },
    { student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12 },
    { student: "Citra", course: "Database", completed: true, score: 87, duration: 42 },
    { student: "Dimas", course: "Backend", completed: true, score: 96, duration: 40 },
    { student: "Eka", course: "Database", completed: false, score: 60, duration: 18 },
    { student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35 },
    { student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36 },
    { student: "Hana", course: "Backend", completed: false, score: 70, duration: 20 }
];

// ---------- Completion Statistics ----------

function getTotalEnrollments(data: Enrolment[]): number {
    return data.length;
}

function getCompletedEnrollments(data: Enrolment[]): Enrolment[] {
    return data.filter(e => e.completed);
}

function getIncompleteEnrollments(data: Enrolment[]): Enrolment[] {
    return data.filter(e => !e.completed);
}

function getCompletionPercentage(data: Enrolment[]): number {
    const total = getTotalEnrollments(data);
    if (total === 0) return 0;
    const completed = getCompletedEnrollments(data).length;
    return Number(((completed / total) * 100).toFixed(2));
}

// ---------- Academic Statistics ----------

function getScores(data: Enrolment[]): number[] {
    return data.map(e => e.score);
}

function getHighestScore(data: Enrolment[]): number {
    return Math.max(...getScores(data));
}

function getLowestScore(data: Enrolment[]): number {
    return Math.min(...getScores(data));
}

function getAverageScore(data: Enrolment[]): number {
    const scores = getScores(data);
    const sum = scores.reduce((acc, s) => acc + s, 0);
    return Number((sum / scores.length).toFixed(2));
}

function getPassingStudents(data: Enrolment[], passMark: number = 75): Enrolment[] {
    return data.filter(e => e.score >= passMark);
}

// ---------- Course Statistics ----------

function getUniqueCourses(data: Enrolment[]): string[] {
    return [...new Set(data.map(e => e.course))];
}

function getEnrollmentsByCourse(data: Enrolment[], course: string): Enrolment[] {
    return data.filter(e => e.course === course);
}

function getStudentCountForCourse(data: Enrolment[], course: string): number {
    return getEnrollmentsByCourse(data, course).length;
}

function getAverageScoreForCourse(data: Enrolment[], course: string): number {
    const courseEnrollments = getEnrollmentsByCourse(data, course);
    return getAverageScore(courseEnrollments);
}

interface CourseStat {
    course: string;
    studentCount: number;
    averageScore: number;
}

function buildCourseStatistics(data: Enrolment[]): CourseStat[] {
    return getUniqueCourses(data).map(course => ({
        course,
        studentCount: getStudentCountForCourse(data, course),
        averageScore: getAverageScoreForCourse(data, course)
    }));
}

// ---------- Learning Statistics ----------

function getDurations(data: Enrolment[]): number[] {
    return data.map(e => e.duration);
}

function getTotalLearningHours(data: Enrolment[]): number {
    return getDurations(data).reduce((acc, d) => acc + d, 0);
}

function getAverageLearningDuration(data: Enrolment[]): number {
    const durations = getDurations(data);
    const total = getTotalLearningHours(data);
    return Number((total / durations.length).toFixed(2));
}

// ---------- Printing (void functions) ----------

function printCompletionStatistics(data: Enrolment[]): void {
    console.log("=== Completion Statistics ===");
    console.log(`Total Enrollments   : ${getTotalEnrollments(data)}`);
    console.log(`Completed           : ${getCompletedEnrollments(data).length}`);
    console.log(`Incomplete          : ${getIncompleteEnrollments(data).length}`);
    console.log(`Completion Rate     : ${getCompletionPercentage(data)}%`);
}

function printAcademicStatistics(data: Enrolment[]): void {
    console.log("\n=== Academic Statistics ===");
    console.log(`Highest Score       : ${getHighestScore(data)}`);
    console.log(`Lowest Score        : ${getLowestScore(data)}`);
    console.log(`Average Score       : ${getAverageScore(data)}`);
    console.log(`Passing Students(≥75): ${getPassingStudents(data).length}`);
}

function printCourseStatistics(data: Enrolment[]): void {
    console.log("\n=== Course Statistics ===");
    buildCourseStatistics(data).forEach(stat => {
        console.log(`${stat.course.padEnd(12)} | Students: ${stat.studentCount} | Avg Score: ${stat.averageScore}`);
    });
}

function printLearningStatistics(data: Enrolment[]): void {
    console.log("\n=== Learning Statistics ===");
    console.log(`Total Learning Hours: ${getTotalLearningHours(data)}`);
    console.log(`Avg Learning Duration: ${getAverageLearningDuration(data)}`);
}

function printDashboard(data: Enrolment[]): void {
    printCompletionStatistics(data);
    printAcademicStatistics(data);
    printCourseStatistics(data);
    printLearningStatistics(data);
}

printDashboard(enrollments);