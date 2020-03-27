//get lat and long from localStorage
var latitude = localStorage.getItem("latitude");
var longitude = localStorage.getItem("longitude");
var minLength = localStorage.getItem("minLength");
var minStars = localStorage.getItem("minStars");
var maxResults = localStorage.getItem("maxResults");
    
    //function to get all card info from rei api

function makeCards(){    
    var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&minLength=" + minLength + "&minStars=" + minStars + "&maxResults=" + maxResults + "&maxDistance=30&key=200166394-792a17647727b298af1948b543b6c58c"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < Number(maxResults); i++) {
            var hikeName = response.trails[i].name;
            var hikeSummary = response.trails[i].summary;
            var hikeDifficulty = response.trails[i].difficulty;
            var hikeImg = response.trails[i].imgSqSmall;
            var hikeLength = response.trails[i].length;
            var hikeAscent = response.trails[i].ascent;
            var hikeDescent = response.trails[i].descent;

            // var card = $("#card" + i);
            // card.empty();

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
            $("#card-row").append(hikingInfo);
            // console.log(response);
        }
    })
}

makeCards();

function getWeather() {
    weatherURL=`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=26b725bced630f42f77f9f97edf3d53a`
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
console.log(response)
        var locationInput = $('#textarea1').val()
        var city = locationInput;
        var weatherContainer = $('<li>').addClass('forecast')
        var temp = $('<h5>').text(response.main.temp + ' ' + '°F').append('<img id="icon" src=http://openweathermap.org/img/w/' + response.weather[0].icon + '.png>')
        weatherContainer.append(city, temp)
        $('#weather').append(weatherContainer)
    })
}
getWeather()