$(document).ready(function(){

  $("#search").click(function(){

    var city = $("#val").val();
    if(city==''){
      alert("enter your city please");
    }

    $.ajax({

        url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=ca39677586387dc163ab3d61a699f7a2",
        type: "GET",
        datatype: "jsonp",
        success: function(data){
          console.log(data);
          var nam = data.name;
          var icoid = data.weather[0].icon;
          var ico = "http://openweathermap.org/img/w/"+icoid+".png";
          var tem = data.main.temp;
          var wind = data.wind.speed;
          var hum = data.main.humidity;
          var pre = data.main.pressure;
          var des = data.weather[0].description;
          $("h2").html(nam);
          $("#description").html(des);
          $("#iconimg").attr("src",ico);
          $("#temp").html(tem);
          $("#windspeed").html(wind);
          $("#humidity").html(hum);
          $("#pressure").html(pre);

          if(des=="broken clouds" || des=="scattered clouds"){
            $("body").css("background-image",'url("cloudy.jpg")');
          }
         else if(des=="clear sky"){
           $("body").css("background-image",'url("clear.jpg")');
         }
         else if(des=="haze"){
           $("body").css("background-image",'url("haze.jpg")');
         }
         else if(des=="clear sky"){
           $("body").css("background-image",'url("snow.jpg")');
         }
         else{
           $("body").css("background-image",'url("clear.jpg")');
         }
        }

    });

  });

  $("#reset").click(function(){
    window.location.reload();
  });


});













// var appid = 'ca39677586387dc163ab3d61a699f7a2';
// var units = 'metric';
// var searchmethod;
//
// function searchWeather(searchTerm){
//   fetch(`api.openweathermap.org/data/2.5/weather?q${searchmethod}=${searchTerm}&APPID=${appid}&units=${units}`).then{result}
// }
//
//
//
//
//
//
// // $("#search").click(function(){
// //   var url = "https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589";
// //   // var key = ca39677586387dc163ab3d61a699f7a2;
// //   var a = document.getElementById("val").value;
// //   $("h2").html(a);
// //   var req = new XMLHttpRequest();
// //   req.open("GET",url,true);
// //   req.send();
// //   req.onload=function(){
// //     json = JSON.parse(req.responseText);
// //     var c = JSON.stringify(json);
// //     $("h1").html(c);
// //   };
// // });
//
//
