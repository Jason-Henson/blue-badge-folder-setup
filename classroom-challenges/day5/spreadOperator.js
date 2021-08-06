/*
    - SPREAD OPERATOR

        - the spread operator pulls out all elements in an array and gives them back to your as a standalone list of elements.
        - it takes in an interable object (array) and regular object and expands it into individual elements.  The spread operator is commonly used to make copies. 
        - denoted by the ellipsis(...)
 */


let students = ['Jason', 'Dashanda'];
// WRONG SYNTAX 
// ...students // it would output 'Jason', 'Dashanda'

let copiedStudents = [...students]; 
// the spread operator makes a new copy of the array it is used on
// Note: That it is NOT doing this: [[ 'Jason', 'Dashanda' ]]
console.log(copiedStudents, students); // outputs: 

students.push('Jalen');
console.log(students, 'Line 20')

//Math
console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices));
console.log(Math.min(...prices));

//CONCATENATE ARRARS 
let sent1 = [1, 2, 3, 4];
let sent2 = [5, 6, 6, 8];

let concat = [...sent1, ...sent2];
console.log(concat);