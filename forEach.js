let family = ["Sofi","Hen", "Len"];

function forEch(arr, callback){
  for(let i = 0; i < arr.length; i++){
    let item = (arr[i]);
    let index = (i);
    let array = (arr);
    callback(item, index, array);
  }
};

function cb(it, ind, ar){
  console.log(it, ind, ar)
};

forEch(family, cb);
