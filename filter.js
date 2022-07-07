// Filter homework new array
const arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
  return arr.filter((item) => item >= a && item <= b)
};
const filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr );

// Filter homework
let newArr = [5, 3, 8, 1]; 
function filterRangeInPlace(newArr, a, b) { 
  return newArr.filter((item) => item >= a && item <= b); 
} 
newArr = filterRangeInPlace(newArr, 1, 4); // удалены числа вне диапазона 1..4 
 
console.log(newArr); // [3, 1]

// Sort homework
const sortArr = [5, 2, 1, -10, 8]; 
sortArr.sort((a, b) => b - a); 
console.log(sortArr);

// Sort 2 homework
const sortArr2 = ["HTML", "JavaScript", "CSS"]; 
function copySorted(arr){ 
  const newArrSort = arr.concat()
   return newArrSort.sort() 
}; 
const sorted = copySorted(sortArr2); 
 
console.log( sorted ); // CSS, HTML, JavaScript 
console.log( sortArr2 );
