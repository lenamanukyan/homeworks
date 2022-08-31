let arr = [1, 2, 3, 6, 4];
const num = arr.length;

function reverse (arr){
  for (let i = arr.length; i > 0; i--){
    arr.push(arr[i - 1]);
  }
  arr.splice(0,num);
  return arr;
};

console.log(reverse(arr));