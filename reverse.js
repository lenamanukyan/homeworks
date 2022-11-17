let arr = [1, 2, 3, 6, 4,];

function reverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  };
  for (let j = 0; j < arr.length / 1; j++) {
    arr.shift()
  }
  return arr;
};

console.log(reverse(arr));
