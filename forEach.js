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

function slice(arr,start,end) {
  const finish = end || arr.length;
  const newArr = [];
  for(let i = start; i < finish; i++){
    newArr.push(arr[i]);
  }
  return newArr;
};
 
console.log('Slice', slice(array, 0));

//Concat

function concat(...arrays) {
  const arr = [];
  for(let i = 0; i < arrays.length; i++) {
    const isElementArray  = Array.isArray(arrays[i]);
    if(isElementArray){
      for(let j = 0; j < arrays[i].length; j++){
        arr.push(arrays[i][j]);
      }
    } else {
      arr.push(arrays[i]);
    }
  }
  return arr;
}
console.log("Concat", concat([1, 2, 3, 4], ["d", 58, 5], [99], "k"));
