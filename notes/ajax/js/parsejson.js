
function loadAjax(){
    var request;

    /*this is for older window browsers*/
    if(window.XMLHttpRequest){
        var request= new XMLHttpRequest();
    }else{
        request = new ActiveObject("Microsoft.XMLHTTP");
    }

    //Get is the method, data, boolean wether we want asynchronous or not
    request.open('GET', 'resource/data.json', true);
    request.send();

    request.onreadystatechange = function() {
        if ((request.readyState===4) && (request.status===200)) {
            var items = JSON.parse(request.responseText);//not compatable in all browswr better to use jquery 
            var output = '<ul>';
            for (var key in items) {
                output += '<li>' + items[key].name + '</li>';
            }
            output += '</ul>';
            document.getElementById('update').innerHTML = output;
        }
    }
}
 window.onload = function(){
    loadAjax();
 };