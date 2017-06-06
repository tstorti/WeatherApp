  $(document).ready(function() {
      $("#getWeather").on("click", function(){  
         //assign zipcode from user input and create API call url.
         var unitType = $("input[name=radioTemp]:checked").val();
         var zip = $("#zipCode").val();
         var url ='http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&units='+unitType+'&appid=a3952d609786e4d345c7162a226c4833';
         
         //API call for current weather
            $.getJSON(url, function(json){
            $("#description").html(json.weather[0].description);
            $("#temp").html("Temperature " + json.main.temp);
            $("#name").html("Today's Weather for " + json.name +":");
            $("#icon").attr("src", "http://openweathermap.org/img/w/"+json.weather[0].icon+".png");
            $("#output").attr("style", "visibility:visible");

         });
      });
   });
   
