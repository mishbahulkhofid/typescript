/**
 * Imagine a teacher has a list of student scores:
 */
const scores = [85, 72, 91, 64, 88];

/** The teacher wants to process every score, but the processing rule can change. */
function printScore(score: number): void {
  console.log(`Score: ${score}`);
}

function processScores(
  scores: number[],
  callback: (score: number) => void
): void {
  for (const score of scores) {
    callback(score);
  }
}

/** now teacher wants to process score with print it */
console.log(`Process scores with print it`);
processScores(scores, printScore)

/** teacher create action to check that score is pass or fail */
function checkPassing(score: number): void {
  if (score >= 75) {
    console.log(`${score} → PASS`);
  } else {
    console.log(`${score} → FAIL`);
  }
}

/** now teacher want to process score with check for passing grade */
console.log(`Process score with checking passing grade`);
processScores(scores, checkPassing)

