var queryURL = "https://www.hikingproject.com/data/get-trails?lat=37.5407&lon=-77.4360&maxDistance=10&key=200166394-792a17647727b298af1948b543b6c58c"
var zipCodeURL = "https://www.zipcodeapi.com/rest/8y6B27OD8VmkCAQ2CbRKlIpO71WQAZxLihMB3eCJHlr0uhrQp3FkVoDtilpAwlus/info.json/23221/degrees" 


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})

var latitude;
var longitude;
function getPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
}
navigator.geolocation.getCurrentPosition(getPosition);