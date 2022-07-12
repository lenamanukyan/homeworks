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
const array = ["t", "e", "s", "t"];

function slice(start, end) {
  const newArr = [];
  for(let i = start; i < array.length; i++){
    newArr.push(array[i]);
    if (array[i] === array[end - 1]) return newArr ;
  }
};

console.log(slice(0,3));

// IndexOf
function indexOf(item){
  for (let i = 0; i < array.length; i++){
    if(array[i] === item){
      return i
    }
  }
};

console.log(indexOf("e"));

// Concat
function concat(arrayOne, arrayTwo){
  const arr = [];
  arr.push(array+arrayOne+arrayTwo);
  return arr;
};
console.log(concat([1,2,3],family)); 
