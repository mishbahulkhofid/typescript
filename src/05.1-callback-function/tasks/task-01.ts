/**
 * A school system needs to send a notification to a student after an important event occurs.
 * The notification system itself should not know what kind of notification will be sent. 
 * Instead, the notification action is provided by another function.
 * For example, when a student successfully registers for a course, the system can display a registration message.
 */

function registerStudent(
    studentName: string,
    callback: (name: string) => void
): void {
    console.log(`Registering ${studentName}...`);

    callback(studentName);
}

/** The school provides the callback: */
function showRegistrationMessage(name: string): void {
    console.log(`${name} successfully registered.`);
}

/** show registration message */
registerStudent(`John Cena`, showRegistrationMessage)

/** 
 * TASK:
 * create another function that display welcomming message for entire student!
 * Don't forget to implement callback function.
 * */