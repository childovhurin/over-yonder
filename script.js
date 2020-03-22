$(document).ready(function(){
    $('.carousel').carousel({fullWidth:true}).css("height", $(window).height());
    // for next slide
    $('.next').click(function(){
        $('.carousel').carousel('next');
    });
  // for prev slide
  $('.prev').click(function(){
        $('.carousel').carousel('prev');
    });
});
var zipCodeURL = "https://www.zipcodeapi.com/rest/8y6B27OD8VmkCAQ2CbRKlIpO71WQAZxLihMB3eCJHlr0uhrQp3FkVoDtilpAwlus/info.json/23221/degrees" 
var queryURL = "https://www.hikingproject.com/data/get-trails?lat=37.5407&lon=-77.4360&maxDistance=10&key=200166394-792a17647727b298af1948b543b6c58c"




var latitude;
var longitude;
function getPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < 6; i++);
        
        var name = response.trails[i].name;
        var trails = response.trails[i].summary;
        var difficulty = response.trails[i].difficulty;
        var imgSqSmall = response.trails[i].imgSqSmall;
        var length = response.trails[i].length;
        var ascent = response.trails[i].ascent;
        var descent = response.trails[i].descent;

        var card = $("<div>");
        card.empty();
        var hikingInfo = $(`${hikeImg}
        ${hikeName}`)
        card.append(hikingInfo);
    }







        // console.log(response);
    })
}
navigator.geolocation.getCurrentPosition(getPosition);

