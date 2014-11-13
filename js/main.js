// Main Javascript File

// Load Google Maps and Set User location
(function(){
	
	// Load Google Maps and Set User location -- Used for index.html and search.html
	if(!!navigator.geolocation) {	// Checks for usable GeoLocation
        var map;
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		// Creates a new map object 
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    	
		// Sets the map location to the users current location (if GeoLocation is available)
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate
            });
            map.setCenter(geolocate);
        });
        
    } else {	// Error Response if GeoLocation is not supported
        document.getElementById('map_canvas').innerHTML = 'No Geolocation Support.';
    }
    
	// Sign In button
	$("#signInBtn").click(function(){
		window.location.href="sign_in.html";
	});
	
	// Register button
	$("#registerBtn").click(function(){
		window.location.href="register.html";
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);