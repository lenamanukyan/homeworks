let arr = [1, 2, 3, 6, 4];

function reverse (arr){
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  arr = newArr
  return arr;
};

console.log(reverse(arr));
