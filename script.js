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


function getPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude +"&maxDistance=10&key=200166394-792a17647727b298af1948b543b6c58c"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
    
}
navigator.geolocation.getCurrentPosition(getPosition);

