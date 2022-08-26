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
