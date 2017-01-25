//-------------------------------------------------//
function a() {
    
    function b() {
        console.log(myVar);
    }
    
	b();
}

var myVar = 1;
a();

//where function sit determine it outer environment reference
//as it beening executed those execution contexts are stacking up 
//and it's running synchronously 