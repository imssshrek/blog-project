// 분명 더 나은 코드가 있을거야...

const createCleanObjectFromArray = arr => {
  let newSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    newSet.add(arr[i].categoryLarge);
  }

  let obj = new Object();
  for (let value of newSet) {
    obj[value] = null;
  }

  let arrOut = [];
  for (let i = 0; i < arr.length; i++) {
    let arrIn = [];
    for (let j = 0; j < arr.length; j++) {
      if (Object.keys(obj)[i] === arr[j].categoryLarge) {
        if (arrIn.indexOf(arr[j].categorySmall) === -1)
          arrIn.push(arr[j].categorySmall);
      }
    }
    arrOut.push(arrIn);
  }
  const newArr = arrOut.filter(arr => arr.length !== 0);

  for (let i = 0; i < newArr.length; i++) {
    obj[Object.keys(obj)[i]] = newArr[i];
  }

  return obj;
};

export default createCleanObjectFromArray;
