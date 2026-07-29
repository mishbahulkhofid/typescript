/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

import { parseArgs } from "node:util";

interface Kehadiran {
    IdKaryawan:string;
    name:string;
    idName:string;
    date:string;
    checkIn:string;
    checkOut:string;
    totalWorkingHours:string;
    present:string;

}

const kehadiran1: Kehadiran = {
    IdKaryawan: "A001",
    name: "John Doe",
    idName: "John Doe",
    date: "2023-08-01",
    checkIn: "08:00",
    checkOut: "16:00",
    totalWorkingHours: "8 hours",
    present: "Yes",
};

const kehadiran2: Kehadiran = {
    IdKaryawan: "A002",
    name: "Jane Smith",
    idName: "Jane Smith",
    date: "2023-08-02",
    checkIn: "09:30",
    checkOut: "17:45",
    totalWorkingHours: "8.5 hours",
    present: "No",      
}

const kehadiran3: Kehadiran = {
    IdKaryawan: "A003",
    name: "Bob Johnson",
    idName: "Bob Johnson",
    date: "2023-08-03",
    checkIn: "10:15",
    checkOut: "18:30",
    totalWorkingHours: "8.5 hours",
    present: "Yes", 
}

const attendance = [kehadiran1, kehadiran2, kehadiran3];
console.table(attendance);