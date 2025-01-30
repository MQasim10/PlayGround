const arr1 = ['qasim', 'haleem', 'muhammad'];
const arr2 = ['ali', 'umer', 'umer'];
const total_students = arr1.concat(arr2);
console.log(total_students);

const marks = [80, 85, 90, 44];
const marks2 = [84, 81, 50];
const total_number = marks.concat(marks2);
const total = marks.length + marks2.length;
console.log(`the total number of students subject is ${total}}`);
console.log(`the marks obtain in each subject respectively are ${total_number}`);