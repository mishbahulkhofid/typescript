/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores<T>(
    scores: number[],
    transformCallback: (score: number) => T
): T[] {
    const results: T[] = [];
    for (const score of scores) {
        results.push(transformCallback(score));
    }
    return results;
}

function checkPassesStatus(score:number){
    const status = score >= 70? "Passed":"Failed"
    console.log(`Status:${score}(${status})`)
}

function showScore(score:number){
    let grade:string;
    if(score > 90){
        grade = "A"
    }else if(score >= 80){
        grade = "B"
    }else if(score >= 70){
        grade = "C"
    }else{
        grade = "D"
     }return `${score}: Grade ${grade}`;
}

function addBonus(score:number){
    const newScore = score + 5;
    console.log(`Score:${score} -> New Score:${newScore}`)
}

function categoryExellent(score:number){
    const category = score >= 90? "Exellent":"Regular"
    console.log(`Status:${score}(${category})`)
}


console.log("1. Pass Status:");
processScores(scores,checkPassesStatus)
console.log("\n2. Letter Grades:");
console.log(processScores(scores, showScore).forEach(res => console.log(res)));
console.log("\n3. Bonus Points (+5):");
processScores(scores,addBonus)
console.log("\n4. Excellence Category:");
processScores(scores,categoryExellent)