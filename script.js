
// parallax function index.html
$(document).ready(function(){
    $('.parallax').parallax();
  });
// optional arguments function - dropdown
  $(document).ready(function(){
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
        //changes page to hike page
        window.location.href = "hike.html";
 
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
    $(document).ajaxStart(function () {
        console.log("starting");
    });

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

    if (typeof (Number($("#max-results").val())) === "number" && Number($("#max-results").val()) >= 0 && Number($("#max-results").val()) <= 500) {
        localStorage.setItem("maxResults", $("#max-results").val());
        console.log("that worked")
    } else {
        $("#max-results").text("Please enter a valid number")
        console.log("that didn't work");
    }
    if (typeof (Number($("#min-stars").val())) === "number" && Number($("#min-stars").val()) >= 0 && Number($("#min-stars").val()) <= 4) {
        localStorage.setItem("minStars", $("#min-stars").val());
        console.log("that worked")
    } else {
        console.log("that didn't work");
    }
    if (typeof (Number($("#min-length").val())) === "number" && Number($("#min-length").val()) >= 0) {
        localStorage.setItem("minLength", $("#min-length").val());
        console.log("that worked")
    } else {
        console.log("that didn't work");
    }



    // localStorage.setItem("minStars", $("#min-stars").val())
    // localStorage.setItem("maxResults", $("#max-results").val())
    // localStorage.setItem("minLength", $("#min-length").val())

}

