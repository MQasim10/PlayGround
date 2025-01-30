const list = [1, 2, 3, 4, 5];
list.push(60);
console.log(list);

const arr = [{
    id: 1,
    name: 'qasim',
    age: 20,
    marks: [80, 85, 90,44] 
},
{
    id: 2,
    name: 'haleem',
    age: 25,
    marks: [84, 81, 50] 
},
{
    id: 3,
    name: 'muhammad',
    age: 30,
    marks: [70, 20, 99,49] 
}
];

for (let i = 0; i < arr.length; i++) {
    if(arr[i].marks.length===3){
        arr[i].marks.push('pass');
    }
}
for(let i=0; i<arr.length; i++) {
    console.log(arr[i].marks);
}