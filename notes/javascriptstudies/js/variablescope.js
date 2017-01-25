function c(){
    myVar=25; //reference to the outer environment
}
function b(){           
    var myVar;
    console.log(myVar);
     c();
}

function a(){
    var myVar=2;
    console.log(myVar);
    b();
}

var myVar=1;
console.log(myVar);
a();
console.log(myVar);
//it is going to be 25 because your already back to global execution context
// and c did not declare it own myvar so it pointing a the global myvar


//global execution context is created myVar =1

//Stack


/*b()
execution context myVar=undfined*/
/*a()
execution context myVar=2*/
/*global execution context 
myVar=1*/

//each vairable defined in it own execution context(function)
//myVar distinct. 


