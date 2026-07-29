/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

import { parseArgs } from "node:util";

interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  category: string;
  isAvailable: boolean;
}
  
const book1:Book = {
    isbn:"978-0-13-110362-7",
    title: "The C Progamming Languange",
    author:"Brian W. Kernighan & Dennis M. Ritchie",
    pages: 272,
    category:"Programming",
    isAvailable:true,
};

const book2:Book = {
    isbn:"978-0-307-47427-8",
    title:"Steve Jobs",
    author:"Walter Isaacson",
    pages:656,
    category:"Biography",
    isAvailable:true,
};

const book3:Book={
    isbn:"978-602-03-3295-7",
    title:"Laskar Pelangi",
    author:"Andrea Hirata",
    pages:529,
    category:"Fiction",
    isAvailable:true,
};
console.log("=== Book Data ===");
console.log(book1);
console.log(book2);
console.log(book3);