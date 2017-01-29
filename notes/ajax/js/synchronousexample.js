
//simulate many request 
for(var i=0; i<100;i++){
    var request= new XMLHttpRequest();
    //Get is the method, data, boolean wether we want asynchronous or not
    request.open('GET', 'resource/data.txt', false);
    request.send();

    if(request.status ===200){
        console.log(request); 
        document.writeln(request.responseText);

    }

}

//note: page wont load until all request are finish ohhhhh!
