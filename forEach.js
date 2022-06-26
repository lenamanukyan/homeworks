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
