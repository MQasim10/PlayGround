const arr = [2,35,26,75,85,84,20];
const filter = arr.filter(item => item > 70);
console.log(filter);



let students = [
    {
        name: 'Ahmed',
        age: 22,
        gpa: 3.8,
        address: '123 Al-Madina St, Riyadh',
        subject: 'Computer Science',
        course: 'Web Development'
    },
    {
        name: 'Fatima',
        age: 24,
        gpa: 3.4,
        address: '456 Al-Farooq Rd, Jeddah',
        subject: 'Mathematics',
        course: 'Advanced Algebra'
    },
    {
        name: 'Omar',
        age: 21,
        gpa: 3.6,
        address: '789 Al-Noor Ln, Mecca',
        subject: 'Physics',
        course: 'Quantum Mechanics'
    },
    {
        name: 'Aisha',
        age: 23,
        gpa: 3.2,
        address: '101 Al-Saud Ave, Medina',
        subject: 'Biology',
        course: 'Genetics'
    },
    {
        name: 'Zayd',
        age: 25,
        gpa: 3.9,
        address: '202 Al-Rashid Blvd, Dammam',
        subject: 'Chemistry',
        course: 'Organic Chemistry'
    }
];

const filter = students.filter(item => item.gpa < 3.5);
// console.log(filter[2].name);
console.log(filter);
let num = filter.length;
console.log(num);