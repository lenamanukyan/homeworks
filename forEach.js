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

function customSlice(start, end) {
  const newArr = [];
  for(let i = start; i < array.length; i++){
    newArr.push(array[i]);
    if (array[i] === array[end - 1]) return newArr ;
  }
};

// IndexOf
function customIndexOf(item){
  for (let i = 0; i < array.length; i++){
    if(array[i] === item){
      return i
    }
  }
};

console.log(customSlice(0,3));
console.log(customIndexOf("e"));