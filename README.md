# Over Yonder

## The avid hiker's new favorite app! Punch in your zip code and find hiking trails near you!

**We believe that it’s in the wild, natural places that we become the best versions of ourselves, Our purpose with this app is to inspire a lifelong love of the outdoors and that those wild parts aren't as far away as you might think. As part of the natural world around us, we're committed to making information more accessible for outdoor enthusiasts to connect, share information and get outside.**

Over Yonder is a web application that gathers the user location and user inputs to provide information on nearby hiking trails.  Over Yonder uses the Materialize CSS framework to provide users with a clean, attractive page layout utilizing the parallax feature.  

![index](https://user-images.githubusercontent.com/59889277/77823574-79f89a00-70d2-11ea-9927-b201d69796af.jpg)


From the index.html page,the user's location can be accessed in two ways: users can either submit a zipcode, city or state name, or full address in the provided input field, or they can opt to allow the browser to retrieve their coordinates using geolocation.  If the user chooses to provide an address, the Google Geocoding API is used to gather the latitude and longitude coordinates from the address.  In addition to location there are three other user inputs: maximum results (which is the only parameter other than address to be required), minimum trail length, and minimum star rating as voted by REI users.  

<img width="1280" alt="Screen Shot 2020-03-28 at 9 06 36 AM" src="https://user-images.githubusercontent.com/59889277/77823714-892c1780-70d3-11ea-8aa1-1ebece7649a6.png">

<img width="1280" alt="Screen Shot 2020-03-28 at 9 06 43 AM" src="https://user-images.githubusercontent.com/59889277/77823717-8e896200-70d3-11ea-9316-953cf3399d5d.png">

Upon clicking one of the two explore buttons, conditional statements are used to verify that user inputs are valid.  Invalid user inputs display an error message in the text area of the corresponding input.  Upon submission of valid inputs, coordinates and query parameters are passed to localStorage and the application location changes to the hike.html page.  Here the values in localStorage are retrieved and passed to multiple APIs.  Latitude and longitude coordinates are passed as parameters for a call to the OpenWeather API, which pulls current weather conditions for the location provided.  All parameters pulled from localStorage are also passed as variables in a call to REI's Hiking Project Data API.  From this API, hike data is pulled and automatically sorted according to the user inputs.  Hike data is used to populate dynamically-created hike information elements, which are then appended to hike.html.  If the user would like to search again, there are search inputs on the hike.html page, allowing the user to resubmit the search without going back to the home page.  An "About" page is included in the app, providing the user with the names, email addresses, and GitHub links of the app creators.  Links to all app pages are included in the headers and footers to assist in navigating the app.

![about](https://user-images.githubusercontent.com/59889277/77823578-7e24b780-70d2-11ea-9d25-5c92f3697467.jpg)


