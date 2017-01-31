
function submitFn(obj, evt){
    var value = $(obj).find('.search-input').val().trim();
    var _html = "Querying Wikipedia for... ";

    _html=(!value.length)?"<span class='danger'>Sorry, please enter a query</span>":_html+"<b>" + value + "</b>";
    //opersnsearch vs search list
    //var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+value;
    var url ="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=1&srsearch="+value+"&srlimit=10&srqiprofile=classic_noboostlinks&srprop=snippet";
    var wikidefault="https://en.wikipedia.org/wiki/";/*one cant get search information and get the url therefore, we take wiki-url+title*/

    $.ajax({
        url      : url,
        type     : 'GET',
        dataType : 'jsonp'
    })
    .done(function(data) {
        var output = "<div class='list-group'>";
        for(var i=0; i<data.query.search.length;i++){
            output+="<li>"+"<a href='"+wikidefault+data.query.search[i].title+"' class='list-group-item list-group-item-action flex-column align-items-start' target='_blank'>";
            output+="<h5 class='mb-1'>"+data.query.search[i].title+"</h4>";
            output+="<p class='snippet'>"+data.query.search[i].snippet+"</p>";
            output+="</li>"+"</a>";
        }
        output+="</ul> </div>"

        $("#update").html(output);
    }).fail(function(){
        console.log("error");
    }).always(function(){
        console.log("complete");
    });

    $(obj).find('.result-container').html('<p>' + _html + '</p>');
    $(obj).find('.result-container').fadeIn(100);

    evt.preventDefault();
}

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    console.log(obj);
}

    /*
        $('#search').animate({
                'marginTop' : "-=400px" //moves up
        });*/