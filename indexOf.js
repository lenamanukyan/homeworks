// IndexOf
const array = ["t", "e", "s", "t"];

function indexOf(item) {
    for (let i = 0; i <= array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
    return -1;
  };
  console.log(indexOf("s"));
