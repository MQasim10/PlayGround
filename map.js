const arr = [23, 45, 67, 89];

const map = arr.map((item) => item + 10);
console.log(map);


const map_testing_multiple = arr.map((number) => number > 50 ? number + 5 : number + 10);
console.log(map_testing_multiple);











let obj = [
    {
    name: 'John',
    age:  23,
    gpa: 3.5,
    isStudent: true,
    isLaptopHolder: ''
},
{
    name: 'Qasim',
    age:  20,
    gpa: 3.8,
    isStudent: true,
    isLaptopHolder: ''
},
{
    name: 'ali',
    age:  10,
    gpa: 0.0,
    isStudent: false,
    isLaptopHolder: ''
},

];

const give_laptop = obj.map((item) => {
    if(item.gpa > 3){
        item.isLaptopHolder = 'true';
    }
    else{ 
        item.isLaptopHolder = 'false';
    }

    return item;
});

console.log(give_laptop[0].isLaptopHolder);
console.log(give_laptop[2].isLaptopHolder);
console.log(give_laptop[2].isStudent);
console.log(give_laptop[2].name);


