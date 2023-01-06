// Slice
const array = ["t", "e", "s", "t"];

function slice(arr,start,end) {
  const finish = end || arr.length;
  const newArr = [];
  for(let i = start; i < finish; i++){
    newArr.push(arr[i]);
  }
  return newArr;
};
 
console.log('Slice', slice(array, 0, 1));

// test