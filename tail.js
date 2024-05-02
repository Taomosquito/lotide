// This function drops off the first element of the array than sends back a new array in its place.
const tail = function(arr) {
  let arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
};
console.log(tail([1]));