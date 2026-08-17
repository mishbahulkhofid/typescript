/**
 * run command: npm run example src/05.1-callback-function/examples/callback-function-return-value.ts
 * 
 * 
 */

type Person = {
    name: string
    height: number
    weight: number
}

type BMI_STATUS = "UNDERWEIGHT" | "NORMAL" | "OBESE"
type BMI_RESULT = Person & { bmiScore: number, status: BMI_STATUS }

const persons: Person[] = [
    { name: `John Cena`, height: 1.5, weight: 50 },
    { name: `John Terry`, height: 1.80, weight: 70 },
    { name: `John Takpor`, height: 1.9, weight: 80 },
    { name: `Johnny English`, height: 1.75, weight: 60 },
    { name: `John Doe`, height: 1.85, weight: 90 },
]

/** function for count BMI */
function determineBMI(selectedPerson: Person): BMI_RESULT {
    const bmiScore = selectedPerson.weight / (selectedPerson.height * selectedPerson.height)
    let bmiStatus: BMI_STATUS = `UNDERWEIGHT`
    if (bmiScore > 25 && bmiScore <= 30) {
        bmiStatus = `NORMAL`
    } else {
        bmiStatus = `OBESE`
    }
    return {
        ...selectedPerson, bmiScore, status: bmiStatus
    }
}

function processBMI<T>(
    arr: Person[],
    callback: (person: Person) => T
): T[] {
    const results: T[] = []
    for (let index = 0; index < arr.length; index++) {
        const result = callback(arr[index])
        results.push(result)
    }
    return results
}


const myResults = processBMI(persons, determineBMI)

console.log(`====== BMI RESULT ======`);
console.table(myResults)