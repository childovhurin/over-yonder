
// parallax function index.html
$(document).ready(function () {
    $('.parallax').parallax();
});
// optional arguments function - dropdown
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('.parallax').parallax();
});


var googleKey = "AIzaSyAjw7sW7HCoUO7X8NlV4SesHImrTd3pqds";

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
//listener to clear input fields when clicked
$(".materialize-textarea").on("click", function(){
    $(this).val("")
})

//click listener for geolocation search
$("#search-geoLocat").on("click", function () {
    navigator.geolocation.getCurrentPosition(getPosition);
})

//click listener for address search
$("#search-zipCode").on("click", function () {
    var userAddress = $("#textarea1").val();
    //checks to make sure address input isn't empty
    if(userAddress.trim() !== ""){
    getCoordinates(userAddress);
    }else{
        $("#textarea1").val("Please enter a valid address, city, or zip code.")
    }
})

//function to get coordinates from geolocation access
function getPosition(position) {
    var geoLat = position.coords.latitude;
    var geoLong = position.coords.longitude;
    storeCoordinates(geoLat, geoLong);
    validateAndStoreOptions();
}

//function to store lat and long in localStorage
function storeCoordinates(lat, long) {
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", long);
}

// function to check if input is valid, store and change page if so, inform user if not
function validateAndStoreOptions() {
    var maxResultsIsValid;
    var minLengthIsValid;
    var minStarsIsValid;

    if ($("#max-results").val() !== "" && typeof (Number($("#max-results").val())) === "number" && Number($("#max-results").val()) >= 0 && Number($("#max-results").val()) <= 500) {
        localStorage.setItem("maxResults", $("#max-results").val());
        maxResultsIsValid = true;
    } else {
        $("#max-results").val("Please enter a valid number(0 - 500).");
    }
    if (typeof (Number($("#min-stars").val())) === "number" && Number($("#min-stars").val()) >= 0 && Number($("#min-stars").val()) <= 4) {
        localStorage.setItem("minStars", $("#min-stars").val());
        minStarsIsValid = true;
    } else {
        $("#min-stars").val("Please enter a valid number(0 - 4).");
    }
    if (typeof (Number($("#min-length").val())) === "number" && Number($("#min-length").val()) >= 0) {
        localStorage.setItem("minLength", $("#min-length").val());
        minLengthIsValid = true;
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