<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var options = {
      fullWidth: true,
      indicators: true
    };
    var elems = document.querySelector('.carousel.no-autoinit');
    console.log(elems)
    var instances = M.Carousel.init(elems, options);
  })
var zipCodeURL = "https://www.zipcodeapi.com/rest/8y6B27OD8VmkCAQ2CbRKlIpO71WQAZxLihMB3eCJHlr0uhrQp3FkVoDtilpAwlus/info.json/23221/degrees" 
=======
var queryURL = "https://www.hikingproject.com/data/get-trails?lat=37.5407&lon=-77.4360&maxDistance=10&key=200166394-792a17647727b298af1948b543b6c58c"
var zipCodeURL = "https://www.zipcodeapi.com/rest/8y6B27OD8VmkCAQ2CbRKlIpO71WQAZxLihMB3eCJHlr0uhrQp3FkVoDtilpAwlus/info.json/23221/degrees"
>>>>>>> 89a326385dfc473b3aefa2ebf747acaf71ef9cc8




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
        $('#textarea1').text(JSON.stringify(response.trails[0].name));
        $('#textarea1').text(JSON.stringify(response.trails[0].summary));
        $('#textarea1').text(JSON.stringify(response.trails[0].difficulty));
        $('#textarea1').text(JSON.stringify(response.trails[0].imgSqSmall));
        $('#textarea1').text(JSON.stringify(response.trails[0].length));
        $('#textarea1').text(JSON.stringify(response.trails[0].ascent));
        $('#textarea1').text(JSON.stringify(response.trails[0].descent));







        // console.log(response);
    })
}
navigator.geolocation.getCurrentPosition(getPosition);

