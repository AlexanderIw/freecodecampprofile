var request;

/*this is for older window browsers*/
if(window.XMLHttpRequest){
    var request= new XMLHttpRequest();
}else{
    request = new ActiveObject("Microsoft.XMLHTTP");
}

//Get is the method, data, boolean wether we want asynchronous or not
request.open('GET', 'resource/data.xml', true);
request.send();

request.onreadystatechange= function(){
    if(request.readyState===4 && request.status ===200){
        console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);//get the first usergit

        var items=request.responseXML.getElementsByTagName('name');
        var output ='<ul>';
        for(var i=0; i<items.length;i++){
            output += '<li>'+
                        items[i].firstChild.nodeValue+'</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML=output;
    }
}
