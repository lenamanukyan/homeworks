const array = ["4","5"];

function testMap(arr){
 let newArr = arr.map(item => item + "test");
 return newArr;
}

function testReduce(arr){
    return arr.reduce((a,b) => a.concat(b + 'test'),[])
  }
  
console.log(testMap(array));
console.log(testReduce(array));

function greaterThenThreeFilter(arr){
  return arr.filter(item => item > 3)
}

function greaterThenThreeReduce(arr){
  let newArr = [];
  arr.reduce((a,b) => {
    a = b
    if(a > 3){
      newArr.push(a)
    };
  })
  return newArr
}

console.log(greaterThenThreeFilter([1,2,3,4,5]));
console.log(greaterThenThreeReduce([1,2,3,4,5]));
