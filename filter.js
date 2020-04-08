// Learn By Implementation
// JS filter (Filter) Implementation
// Author: Devv_Li
// Twitter: @Devv_Li
// Date: Jan/2/2020

// Create array method sieve that takes in a callback and context as a parameter.
Array.prototype.Filter = function (callback, context) {
  // Create an empty array to hold modified value.
  arr = [];

  // Create a for loop that iterates through the array the method is called on.
  for (var i = 0; i < this.length; i++) {
    // The callback is called with the .call and context to bound the callback function to the context that is given.
    // The callback is called with the following value
    // 1: The current value in the array iteration
    // 2: The array index
    // 3: The whole array
    // if the callback returns true the value is pushed into the array created earlier
    if (callback.call(context, this[i], i, this)) arr.push(this[i]);
  }
  // @ the end of the loop the sieve functiion returns the array
  return arr;
};

// For the test the sieve function returns all the even numbers in the array
var arr = [1, 20, 30, 80, 2, 9, 3];
var result = arr.Filter(function (n) {
  return n % 2 === 0;
});
console.log(result);
