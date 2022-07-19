const family = ["Sofi","Hen", "Len"];

function customForEach(arr, callback){
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
};

function cb(item, index, arr){
  console.log(item, index, arr)
};

customForEach(family, cb);

// Slice
const array = ["t", "e", "s", "r"];

function slice(arr,start,end) {
  end = end || arr.length;
  const newArr = [];
  for(let i = start; i < arr.length; i++){
    newArr.push(arr[i]);
    if (arr[i] === arr[end - 1]) return newArr ;
  }
};
 
console.log('Slice', slice(array, 0));

// IndexOf
function indexOf(item) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === item) {
      return i;
    } else if (array[i] === undefined) {
      return -1;
    }
  }
}

console.log(indexOf('f'));

//Concat

function concat(...arrays) {
  const arr = [];
  for(let i = 0; i < arrays.length; i++) {
    for(let j = 0; j < arrays[i].length; j++) {
      arr.push(arrays[i][j]);
    }
  }
  return arr;
}
console.log("Concat", concat([1, 2, 3, 4], ["d", 58, 5], [99]));

