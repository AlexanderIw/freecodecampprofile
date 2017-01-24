//Make Object Properties Private//
/*We can also create private properties and private methods, 
which aren't accessible from outside the object.

To do this, we create the variable inside the constructor 
using the var keyword we're familiar with, instead of creating 
it as a property of this.

This is useful for when we need to store information about
 an object but we want to control how it is used by outside code.*/

var Bike = function() {
    /*this keyword to reference public 
    properties of the current object.*/
    var gear=0;
    
    this.setGear = function(currentGear){
        gear=currentGear;
    };
    this.setAry=function(myAry){
        ary=myAry;
    };
};
var myBike = new Bike();

myBike.setGear(4);
console.log(myBike.getGear());