const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrA, arrB) {
  let test = true;
  if (arrA.length !== arrB.length) {
    test = false;
  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) {
        test = false;
        break;
      }
    }
  }
  return test;
};


const middle = function(arr) {
  let returnedArr = [];

  if (arr.length <= 2) {
    return returnedArr;
  }

  const length = arr.length;
  const midPoint = Math.ceil(length / 2);

  if (length % 2 === 0) {
    returnedArr.push(arr[midPoint - 1], arr[midPoint]);
  } else {
    returnedArr.push(arr[midPoint]);
  }

  console.log(returnedArr);
  return returnedArr;
}
middle([1,2,3,4,5,6,7,8])
/*
assertArraysEqual(middle([1]), []); // Expected: []
assertArraysEqual(middle([1,2]), []); // Expected: []
assertArraysEqual(middle([1,2,3]), [2]); // Expected: [2]
assertArraysEqual(middle([1,2,3,4,5]), [3]); // Expected: [3]
assertArraysEqual(middle([1,2,3,4]), [2,3]); // Expected: [2,3]
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); // Expected: [3,4]
*/