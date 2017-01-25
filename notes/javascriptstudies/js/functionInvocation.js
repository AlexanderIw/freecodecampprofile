function b(){

}

function a(){
    b();
}

/*A new execution context is created 
- place on the execution stack*/
a();//invoke a

                            //the top of the stack is the cuerrently executed fuction
function x(){               //function stack x, y global execution context
    y(); // we go to y      //pop order is y, x, global execution context
    var c;
}

//return back to x before
//it is pop of the stack
function y(){
    var d;
}

x();//invoke function a
var d;// wont get run until x is finish, y is done 