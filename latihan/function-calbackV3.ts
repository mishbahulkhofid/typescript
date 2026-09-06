const scores = [85, 72, 91, 64, 88];

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    // implementation
    for(const score of scores){
        callback(score)
    }
}

function printScore(score: number) {
    // implementation
    console.log(`Score:${score}`)
}

function showGrade(score: number) {
    // implemetation
    let grade:string;
    if(score >= 90){
        grade = "A"
    }else if ( score >= 80){
        grade = "B"
    }else if(score >= 70){
        grade = "C"
    }else{
        grade = "D"
    }console.log(`Grade:${grade}`)
}

function checkPass(score:number){
    const status = score >= 70? "Passed":"Failed";
    console.log(`Score:${status}`)
}

// implementation of callback function
processScores(scores, printScore)
console.log("=========================")
processScores(scores, showGrade)
console.log("=========================")
processScores(scores, checkPass )