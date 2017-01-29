var theWeather= function(){
    var xhr= new XMLHttpRequest();
    var lat=0, lon=0,degree={};
    var weather  = document.getElementById("weather");
    var location = document.getElementById("location");
    var icon = document.getElementById("weather-icon");
    var description=document.getElementById("description");
    var mydegree= document.getElementById("degree");
    var myimage= document.getElementById("main-body");
    var imageArray=["cloud","thunder", "rain", "snow","fog"];
    //var arrayColors=[{"thunder":"1a2844"}]; coming soon 

    var openWeatherToIcons={
        "01d":"wi wi-day-sunny",
        "01n":"wi wi-night-clear",
        "02d":"wi wi-day-cloudy cloud",
        "02n":"wi wi-night-alt-cloudy cloud",
        "03d":"wi wi-cloud",
        "03n":"wi wi-cloud",
        "04d":"wi wi-cloudy cloud",
        "04n":"wi wi-cloudy cloud",
        "09d":"wi wi-day-showers rain",
        "09n":"wi wi-night-alt-showers rain",
        "10d":"wi wi-day-rain",
        "10n":"wi wi-night-alt-rain",
        "11d":"wi wi-day-thunderstorm",
        "11n":"wi wi-night-alt-thunderstorm",
        "13d":"wi wi-day-snow",
        "13n":"wi wi-night-alt-snow",
        "50d":"wi wi-day-fog",
        "50n":"wi wi-night-fog"
    };

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat=position.coords.latitude;
            lon= position.coords.longitude;

            xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=dd4350d969e807334c5242068669b269', true);
            xhr.send();// not sure what extra information needed

            xhr.onload=function(){
                if(xhr.status===200){    //code to process the results from the server
                    var weatherObj= JSON.parse(xhr.responseText);
                    degree.c=parseInt(weatherObj.main.temp-273);//celsius
                    degree.f=parseInt(1.8*degree.c+32);        //fahrenheit

                    //console.log(xhr.responseText);
                    location.innerHTML=weatherObj.name;
                    weather.innerHTML=degree.f +" &#8457;";
                    description.innerHTML=weatherObj.weather[0].description;
                    icon.className=openWeatherToIcons[weatherObj.weather[0].icon];

                    
                    myimage.style.backgroundImage=(function(){
                        for(var i=0; i<imageArray.length; i++){
                            var re= new RegExp(imageArray[i],'g');
                            if(openWeatherToIcons[weatherObj.weather[0].icon].match(re)!==null){
                                return "url('/img/"+imageArray[i]+".jpg') ";
                            }
                        }
                        return  "url('/img/default.jpg')";
                        //function been tested.... it pickup all weather codes
                    })();
                    

                    document.getElementById("convert").addEventListener("click", function(){
                        //console.log(this.value);
                        if(this.value==='c'){
                             weather.innerHTML=degree.c+ " &#8451";
                             this.value='f'
                             mydegree.innerHTML=" Fahrenheit";
                        }else{
                            weather.innerHTML=degree.f+ " &#8457;";
                            this.value='c';
                            mydegree.innerHTML=" Celsius";
                        }
                    });
                }
            }//end xhr func
        });
    }
}

theWeather();