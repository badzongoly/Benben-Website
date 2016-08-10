$(document).ready(function() {

	var onMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		onMobile = true;
	}

  if (onMobile == false){
    $(window).load(function(){
      //Google Map          
      var latlng = new google.maps.LatLng(5.627115, -0.085597);
      var settings = {
        zoom: 16,
        center: new google.maps.LatLng(5.627115, -0.085597), mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scrollwheel: false,
        draggable: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP};
      var map = new google.maps.Map(document.getElementById("map_canvas"), settings); 
      google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      }); 
      var contentString = 
        '<div id="content">'+
        '  <h3>BenBen</h3>'+
        '  <div id="bodyContent">'+
        '    <p>47 Nungua Link Road, Second Floor,</p>'+
				'    <p>Baatsona, Spintex Road, Accra </p>'+
                      
                       '    <p>Telephone: +233 206997565 </p>'+
					  '    <p>Email:info@benben.com.gh</p>'+
					   
					   
					   
        '  </div>'+
        '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      }); 
      var companyImage = new google.maps.MarkerImage('img/marker.png',
        new google.maps.Size(63,68), //Width and height of the marker
        new google.maps.Point(0,0),
        new google.maps.Point(35,20) //Position of the marker
      );
      var companyPos = new google.maps.LatLng(5.558182, -0.172259); 
      var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyImage,               
        title:"Creative News",
        zIndex: 3});
      google.maps.event.addListener(companyMarker, 'click', function() {
        infowindow.open(map,companyMarker);
      });
    });
  }else{
    $('#map_canvas').addClass('map-bg-mobile');
  }
  
});