var request= new XMLHttpRequest();

/*this is for older window browsers
if(window.XMLHttpRequest){
    var request= new XMLHttpRequest();
}else{
    request = new ActiveObject("Microsoft.XMLHTTP");
}
*/
//Get is the method, data, boolean wether we want asynchronous or not
request.open('GET', 'resource/data.txt', true);
request.send();

request.onreadystatechange= function(){
    if(request.readyState===4 && request.status ===200){
        var modify= document.getElementsByTagName("li");
        
        for(var i =0; i< modify.length;i++){
              modify[i].innerHTML=i+" "+request.responseText;
        }
      

    }
}
