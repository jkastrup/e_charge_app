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
    	
	
	// Register button at the bottom of index.html
	$('#registerMe').click(function(){ 
		//console.log('Click Successful');
		$(location).attr('href', 'register.html');
	});

	// Favorites.html Cancel button 
	$('.tmn').hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this.removeClass('hover');
	});
	
	
})(jQuery); // End self-executing function