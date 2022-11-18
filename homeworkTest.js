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
