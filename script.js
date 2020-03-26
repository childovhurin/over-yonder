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
        //changes page to hike page
        window.location.href = "hike.html";
        storeCoordinates(addressLat, addressLong);
    })
}

var located = false;

//click listener for geolocation search
$("#search-geoLocat").on("click", function () {
    navigator.geolocation.getCurrentPosition(getPosition);
})

//click listener for address search
$("#search-zipCode").on("click", function () {
    var userAddress = $("#textarea1").val();
    getCoordinates(userAddress);


})

//function to get coordinates from geolocation access
function getPosition(position) {
    var geoLat = position.coords.latitude;
    var geoLong = position.coords.longitude;
    located = true;
    storeCoordinates(geoLat, geoLong);
    //changes page to hike page
    window.location.href = "hike.html";
}


//function to store lat and long in localStorage
function storeCoordinates(lat, long) {
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", long);
}

