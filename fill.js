// const numbers = [1, 2, 3, 4, 5];
// numbers.fill(0, 2, 4);

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
        arr.fill('black', i, i+1);
    }
    else{
        arr.fill('white', i, i+1);
    }
}
console.log(arr);