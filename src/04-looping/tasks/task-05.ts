/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedalWinners = 0;
let silverMedalWinners = 0;
let bronzeMedalWinners = 0;
let noMedalWinners = 0;
let totalScore = 0;
let averageScore = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 95) {
        goldMedalWinners++;
    } else if (scores[i] >= 85 && scores[i] <= 94) {
        silverMedalWinners++;
    } else if (scores[i] >= 75 && scores[i] <= 84) {
        bronzeMedalWinners++;
    } else {
        noMedalWinners++;
    }
    totalScore += scores[i];
}
averageScore = totalScore / scores.length;

console.log("Gold Medal Winners: ",goldMedalWinners);
console.log("Silver Medal Winners: ",silverMedalWinners);
console.log("Bronxe Medal Winners: ",bronzeMedalWinners);
console.log("No Medal Winners: ",noMedalWinners);
console.log("Average: ",averageScore);