/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let tertinggi = scores[0];
  for(let n of scores){
    if(n > tertinggi)
      tertinggi = n;
  }return tertinggi;
}

function findLowestScore(scores: number[]): number {
  let terendah = scores[0];
  for(let n of scores){
    if(n < terendah)
      terendah = n;
  }return terendah;
}
function calculateAverage(scores: number[]): number {
  let total = 0;
  for(let n of scores){
    total += n
  }return total / scores.length
}

function countPassedStudents(scores: number[]): number {
  let passedStudent = 0;
  for(let student of scores){
    if(student > 75)
     passedStudent++
  }return passedStudent;
}

console.log(`Nilai Tertinggi: ${findHighestScore(scores)}`);
console.log(`Nilai Terendah: ${findLowestScore(scores)}`);
console.log(`Rata-rata: ${calculateAverage(scores).toFixed(2)}`);
console.log(`Jumlah Lulus (>75): ${countPassedStudents(scores)}`);