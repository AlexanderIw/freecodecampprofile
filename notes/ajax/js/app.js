$('#search').keyup(function(){
    var searchField= $('#search').val();
    //console.log(searchField);
    var regEx= new RegExp(searchField, "i");//case insensitive

    $.getJSON('resource/data.json', function(data){
        //console.log(data);
        var output = "<ul class='searchresults'>";
        $.each(data, function(key, val){
            if(val.name.search(regEx)!==-1 || 
                val.bio.search(regEx)!==-1){
                output +="<li>";
                output +="<h4>"+ val.name +"</h4>";
                output +="<p>"+ val.bio+"</p>";
                output += "</li>";

            }

        });
        output +="</ul>";
        $("#update").html(output); 
    });
});