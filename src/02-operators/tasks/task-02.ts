/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const finalScore: number = 82;
const attendance: number = 94;
const tuitionPaid: boolean = true;
const isEligible: boolean = finalScore >= 75 && attendance >= 90 && tuitionPaid;

console.log("=== Student Eligibility ===");
console.log("Final Score:", finalScore);
console.log("Attendance:", attendance);
console.log("Tuition Paid:", tuitionPaid);
console.log("Eligibility:", isEligible);
