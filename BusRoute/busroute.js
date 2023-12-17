        //initialize map
		let map;
		let  markers = []; //store array of locations

    	function initMap(){
	    	map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 42.353350, lng: -71.091525 }
            });
    	
			//update bus locations every 15 seconds
			updateBusLocations();
			setInterval(updateBusLocations,15000);
		}

		//remove existing markers
		async function updateBusLocations(){
			markers.forEach(marker => marker.setMap(null));
			markers = [];

		// Add markers to map
		let locations = await getBusLocations();
    	locations.forEach(location => {
			//define the type of icon
        	const icon = {
            	path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            	scale: 8,
            	fillColor: 'black',
            	fillOpacity: 1,
            	strokeWeight: 1,
            	rotation: location.bearing, // Rotate the icon based on bearing
			};

			//attach lat and lng to the icon
        	const marker = new google.maps.Marker({
            	position: {lat: location.lat, lng: location.lng},
            	map: map,
            	icon: icon,
				//add route IDs 
            	label: {
                	text: location.routeId.toString(),
                	color: 'red',
                	fontSize: '20px',
					fontWeight: 'bold',
            	}
        	});
        
			markers.push(marker);
    	});
	}

		// Make API call get real time bus data
		async function getBusLocations(){
			//let url = 'https://bustime.mta.info/api/siri/vehicle-monitoring.json?key=f6874be6-b49f-457c-acb3-54463cafcc0e&version=2&OperatorRef=MTA&LineRef=MTA%20NYCT_M4'; //NYC MTA	
			let url = 'https://api-v3.mbta.com/vehicles?api_key=b0dd23bb2d6c4b82abec6daf713ea23e&include=trip';	 //Boston MBTA
			let response = await fetch(url);
			let json = await response.json();


		// Extract vehicle lng and lat, bearing, and routeID from the JSON response
		return json.data.map(vehicle => {
        	return {
            	lat: vehicle.attributes.latitude,
            	lng: vehicle.attributes.longitude,
				bearing: vehicle.attributes.bearing,
				routeId: vehicle.relationships.route.data.id
			};
   		 });
		}