//get lat and long from localStorage
var latitude = localStorage.getItem("latitude");
var longitude = localStorage.getItem("longitude");
var minLength = localStorage.getItem("minLength");
var minStars = localStorage.getItem("minStars");
var maxResults = localStorage.getItem("maxResults");
    
 //function to get all card info from rei api on hike page load
function makeCards(){    
    var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&minLength=" + minLength + "&minStars=" + minStars + "&maxResults=" + maxResults + "&maxDistance=30&key=200166394-792a17647727b298af1948b543b6c58c"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            console.log(response);
        for (var i = 0; i < Number(maxResults); i++) {
            var hikeName = response.trails[i].name;
            var hikeSummary = response.trails[i].summary;
            var hikeStars = response.trails[i].stars;
            var hikeDifficulty = response.trails[i].difficulty;
            var hikeImg = response.trails[i].imgSqSmall;
            var hikeLength = response.trails[i].length;
            var hikeAscent = response.trails[i].ascent;
            var hikeDescent = response.trails[i].descent;

            var hikingInfo = $("<div>");
            hikingInfo.addClass("hiking-info-div");
            hikingInfo.html(`<img src = ${hikeImg}>
            <br>
            <h4>${hikeName}</h4>
            <br>
            <h5>${hikeSummary}</h5>
            <br>
            Rating: ${hikeStars} Stars
            <br>
            Difficulty: ${hikeDifficulty}
            <br>
            Length: ${hikeLength} Miles
            <br>
            Ascent: ${hikeAscent} Feet
            <br>
            Descent: ${hikeDescent} Feet`)
            // var img = $("<img>")
            .css("width", "500px")
            .css("height","500px")
            .css("border","2px solid green")
            .css("margin","2px auto")
            .css("padding","2px")
            // $("<img>").css("width","250px")
            // .css("display","inline-block")
            $("#card-row").append(hikingInfo);
        }
    })
}

//populates hike-info-divs on page load
makeCards();

//listener to clear input fields when clicked
$(".materialize-textarea").on("click", function(){
    $(this).val("")
})

//listener for searching from hike page
$(".explore-button").on("click", function(){
    event.preventDefault();
    var userAddress = $("#textarea1").val();
    //makes sure userAddress isn't empty
    if(userAddress.trim() !== ""){
        getCoordinates(userAddress);
        }else{
            $("#textarea1").val("Please enter a valid address, city, or zip code.")
        }
    getCoordinates(userAddress);
})

//function to get lat and long from address
function getCoordinates(address) {
    var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + googleKey;

    $.ajax({
        url: geocodeURL,
        method: "GET"
    }).then(function (response) {
        var addressLat = response.results[0].geometry.location.lat;
        var addressLong = response.results[0].geometry.location.lng;
        storeCoordinates(addressLat, addressLong);
        validateAndStoreOptions();

    })
}
// function to check if input is valid, store and change page if so, alert if not
function validateAndStoreOptions() {
    var maxResultsIsValid;
    var minLengthIsValid;
    var minStarsIsValid;

    if ($("#max-results").val() !== "" && typeof (Number($("#max-results").val())) === "number" && Number($("#max-results").val()) >= 0 && Number($("#max-results").val()) <= 500) {
        localStorage.setItem("maxResults", $("#max-results").val());
        maxResultsIsValid = true;
        console.log(maxResultsIsValid);
        console.log("that worked")
    } else {
        $("#max-results").val("Please enter a valid number(0 - 500).");
        console.log("that didn't work");
    }
    if (typeof (Number($("#min-stars").val())) === "number" && Number($("#min-stars").val()) >= 0 && Number($("#min-stars").val()) <= 4) {
        localStorage.setItem("minStars", $("#min-stars").val());
        minStarsIsValid = true;
        console.log(minStarsIsValid);
        console.log("that worked")
    } else {
        console.log("that didn't work");
        $("#min-stars").val("Please enter a valid number(0 - 4).");

    }
    if (typeof (Number($("#min-length").val())) === "number" && Number($("#min-length").val()) >= 0) {
        localStorage.setItem("minLength", $("#min-length").val());
        minLengthIsValid = true;
        console.log(minLengthIsValid);
        console.log("that worked")
    } else {
        console.log("that didn't work");
        $("#min-length").val("Please enter a valid number.")
    }

    if(maxResultsIsValid === true && minLengthIsValid === true && minStarsIsValid === true){
        window.location.href = "hike.html";
    }else{
        return;
    }
}
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
        .css("background", "green")
        .css("width", "100px")
        .css("height","100px")
        // .css("padding","20px")
        $('#weather').append(weatherContainer)
    })
}
getWeather()
