  $(document).ready(function() {
      $(".getWeather").on("click", function(){  
         //assign zipcode from user input and create API call url.
         var unitType = $("input[name=radioTemp]:checked").val();
         var zip = $("#zipCode").val();
         console.log(unitType);
         if (unitType == 1){
            unitType = "imperial";
         }
         else if(unitType == 2){
            unitType ="metric";
         }
         else{
           $(".description").html("Please choose Farenheit or Celcius.") 
         }
         console.log(unitType);
         var url ='http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&units='+unitType+'&appid=a3952d609786e4d345c7162a226c4833';
         console.log(url);
         
         //API call for current weather
         $.getJSON(url, function(json){
            $(".description").html(json.weather[0].description);
            $(".temp").html("Temperature " + json.main.temp);
            $(".name").html("Today's Weather for " + json.name +":");
            $(".icon").attr("style", "visibility:visible");
            $(".icon").attr("src", "http://openweathermap.org/img/w/"+json.weather[0].icon+".png");
         });
      });
   });
   
