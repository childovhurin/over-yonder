$(document).ready(function(){
    $('.parallax').parallax();
  });

var zipCodeURL = "https://www.zipcodeapi.com/rest/8y6B27OD8VmkCAQ2CbRKlIpO71WQAZxLihMB3eCJHlr0uhrQp3FkVoDtilpAwlus/info.json/23221/degrees" 

var queryURL = "https://www.hikingproject.com/data/get-trails?lat=37.5407&lon=-77.4360&maxDistance=10&key=200166394-792a17647727b298af1948b543b6c58c"
var zipCodeURL = "https://www.zipcodeapi.com/rest/8y6B27OD8VmkCAQ2CbRKlIpO71WQAZxLihMB3eCJHlr0uhrQp3FkVoDtilpAwlus/info.json/23221/degrees"




var latitude;
var longitude;
function getPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=10&key=200166394-792a17647727b298af1948b543b6c58c"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < 6; i++) {
            var hikeName = response.trails[i].name;
            var hikeSummary = response.trails[i].summary;
            var hikeDifficulty = response.trails[i].difficulty;
            var hikeImg = response.trails[i].imgSqSmall;
            var hikeLength = response.trails[i].length;
            var hikeAscent = response.trails[i].ascent;
            var hikeDescent = response.trails[i].descent;

            var card = $("#card" + i);
            card.empty();
            var hikingInfo = $("<div>");
            hikingInfo.addClass("hiking-info-div");
            hikingInfo.html(`<img src = ${hikeImg}>
            <br>
            <h4>${hikeName}</h4>
            <br>
            <h5>${hikeSummary}</h5>
            <br>
            Difficulty: ${hikeDifficulty}
            <br>
            Length: ${hikeLength} Miles
            <br>
            Ascent: ${hikeAscent} Feet
            <br>
            Descent: ${hikeDescent} Feet`)
            card.append(hikingInfo);
            // console.log(response);
        }
    })
}
navigator.geolocation.getCurrentPosition(getPosition);

//script to create a map
// var map = new ol.Map({
//     target: 'map',
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([37.41, 8.82]),
//       zoom: 4
//     })
//   });