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
// establishes the variables for later usage.  
  let returnedArr = [];

  // starts the requirement calculation below.
  if (arr.length <= 2) {
    return returnedArr;
  }

  // establishes important reference points.
  const length = arr.length;
  const midPoint = Math.floor(length / 2);

 // checks for performs the conditional logic to determine which values I will be working with. 
  if (length % 2 === 0) {
    returnedArr.push(arr[midPoint - 1], arr[midPoint]);
  } else {
    returnedArr.push(arr[midPoint]);
  }

 // sends the value back to the function when called. 
  return returnedArr;
}

// testing.
assertArraysEqual(middle([1]), []); // Expected: []
assertArraysEqual(middle([1,2]), []); // Expected: []
assertArraysEqual(middle([1,2,3]), [2]); // Expected: [2]
assertArraysEqual(middle([1,2,3,4,5]), [3]); // Expected: [3]
assertArraysEqual(middle([1,2,3,4]), [2,3]); // Expected: [2,3]
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); // Expected: [3,4]
