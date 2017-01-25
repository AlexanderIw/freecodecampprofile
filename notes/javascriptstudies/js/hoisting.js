
/*The execution context is created in two phases*/
//first phase is called the creation phase. js engine allocate memory for variable and functions

//Example of hositing 
//this work because all function in js are put in too  memory entirly 
b();
//one get undefined because the assignment happen during execution and we get the place holder 
console.log(a);
var a ="hell world!";
function b(){
    console.log("called B!");
}

/* in console try access b and try using window.b*/