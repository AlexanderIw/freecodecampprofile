var a;          //if we delete  a app.js:2 Uncaught ReferenceError: a is not defined
                // because it was not place in memory during the create phase
console.log(a);

if(a===undefined){
    console.log('a is undefined!');
}else{
    console.log("a is defined!");
}