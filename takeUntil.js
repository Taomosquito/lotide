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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    newArray.push(element);
    if (callback(element)) {
      newArray.pop();
      return newArray;
    }
  }
}

// expected input below:
// // // const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// // // console.log(data1.length);
// // // const results1 = takeUntil(data1, x => x < 0);
// // // console.log(results1);
// // // 
// // // console.log('---');
// // // 
// // // const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// // // console.log(data2.length);
// // // const results2 = takeUntil(data2, x => x === ',');
// // // console.log(results2);

//expected output below:
// // // [1, 2, 5, 7, 2]
// // // --
// // // ['I\'ve', 'been', 'to', 'Hollywood']

// Testing below: 
// // Testing Data Sets.
const testingArray1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testingArray2 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const testingArray3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const testingArray4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const testingArray5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

// // Testing Callback Functions.
const TestingCallback = function(value) {
  return function(element) {
    return element === value;
  };
};

// 1st Test of 1st Data Set.
assertArraysEqual(takeUntil(testingArray1, TestingCallback(0)), []);

// 2nd Test of 1st Data Set.
assertArraysEqual(takeUntil(testingArray1, TestingCallback(1)), [0]);

// 3rd Test of 1st Data Set.
assertArraysEqual(takeUntil(testingArray1, TestingCallback(2)), [0, 1]);

// 1st Test of 2nd Data Set.
assertArraysEqual(takeUntil(testingArray2, TestingCallback(-5)), []);

// 2nd Test of 2nd Data Set.
assertArraysEqual(takeUntil(testingArray2, TestingCallback(-4)), [-5]);

// 3rd Test of 2nd Data Set.
assertArraysEqual(takeUntil(testingArray2, TestingCallback(-3)), [-5, -4]);

// 1st Test of 3rd Data Set.
assertArraysEqual(takeUntil(testingArray3, TestingCallback('0')), []);

// 2nd Test of 3rd Data Set.
assertArraysEqual(takeUntil(testingArray3, TestingCallback('1')), ['0']);

// 3rd Test of 3rd Data Set.
assertArraysEqual(takeUntil(testingArray3, TestingCallback('2')), ['0', '1']);

// 1st Test of 4th Data Set.
assertArraysEqual(takeUntil(testingArray4, TestingCallback('A')), []);

// 2nd Test of 4th Data Set.
assertArraysEqual(takeUntil(testingArray4, TestingCallback('B')), ['A']);

// 3rd Test of 4th Data Set.
assertArraysEqual(takeUntil(testingArray4, TestingCallback('C')), ['A', 'B']);

// 1st Test of 5th Data Set.
assertArraysEqual(takeUntil(testingArray5, TestingCallback('a')), []);

// 2nd Test of 5th Data Set.
assertArraysEqual(takeUntil(testingArray5, TestingCallback('b')), ['a']);

// 3rd Test of 5th Data Set.
assertArraysEqual(takeUntil(testingArray5, TestingCallback('c')), ['a', 'b']); 