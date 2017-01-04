//Iterate over Arrays with map//
/*The map method will iterate through every element of the array, 
creating a new array with values that have been modified by the 
callback function, and return it. Note that it does not modify 
the original array.

In our example the callback only uses the value of the array element 
(the val argument) but your callback can also include arguments 
for the index and array being acted on.*/
var ary=[1,2,3,4,5];
var newArray= ary.map(function(val){
    return val+3;
});
//console.log("new array= "+ newArray);

//Condense arrays with reduce//
/*The array method reduce is used to iterate 
through an array and condense it into one value.
-To use reduce you pass in a callback whose arguments 
are an accumulator (in this case, previousVal) and 
the current value (currentVal).
-The accumulator is like a total that reduce keeps track 
of after each operation. The current value is just the 
next element in the array you're iterating through.
-reduce has an optional second argument which can be used to 
set the initial value of the accumulator. If no initial value 
is specified it will be the first array element and currentVal
 will start with the second array element.*/

//Use the reduce method to sum all the values in array and assign it to singleVal.
var array = [4,5,6,7,8];
var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
//console.log("singleVal= "+singleVal);


//Filter Arrays with filter//
/*The filter method is used to iterate through an 
array and filter out elements where a given condition 
is not true.
-filter is passed a callback function which takes the 
current value (we've called that val) as an argument.
-Any array element for which the callback returns true
will be kept and elements that return false will be filtered out.*/
var array= [1,2,3,4,5,6,7,8,9,10];
array = array.filter(function(val) {
  //create a new array with all values less than 6
  return val < 6;
});
//console.log("array= "+array);

//Sort Arrays with sort//
//Use sort to sort array from largest to smallest.
var array = [1, 12, 21, 2];
array.sort(function(a,b){
  return b-a;
});
//console.log("sorted array="+ array);

//Concatenate Arrays with concat
var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

newArray=oldArray.concat(concatMe);
console.log("concat two arrays= "+ newArray);
console.log("join array and creating a string= \n"+ newArray.join(";-)"));