$(window).load(function(){
	$.backstretch([
		  "img/bg/trac_header1.jpg",
		  "img/bg/trac_header2.jpg",
		  "img/bg/trac_header3.jpg",
		  "img/bg/trac_header4.jpg",
		  "img/bg/trac_header5.jpg",
		  "img/bg/trac_header6.jpg"
		  ], {
			fade: 3000,
			duration: 3000,
			transition: 1000
	});
	/*==================================================
	/*	Tooltip
	/*================================================== */
	$( 'body' ).tooltip({
		selector: "a[data-toggle=tooltip]"
	});
	
	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	
	/*=====================================================================
	/*	STICKY NAV
	/*======================================================================*/
	$(".trac_menu").sticky({ topSpacing: 0 });
	
	/*=====================================================================
	/*	RESPONSIVE MENU
	/*======================================================================*/
	$('.trac_mobilebutton').click(function() {
	  $('.trac_mobtrac_menu').toggle('slow', function() {
		return false;
	  });
	});
	$('.trac_mobtrac_menu a').click(function() {
	  $('.trac_mobtrac_menu').toggle('slow', function() {
		return false;
	  });
	});
	
	$(".trac_mainmenu li").hover(
	  function () {
		$(this).addClass("active");
	  },
	  function () {
		$(this).removeClass("active");
	  }
	);
	$('.trac_menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 2000,
        scrollOffset: 90,
        scrollThreshold: 0,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
        },
        scrollChange: function($currentListItem) {  
        }
    });
	
	
	/*===========================================================*/
	/*	SUBSCRIBE Form
	/*===========================================================*/	
	$('#trac_subscribe-form').validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		},
		highlight: function(element) {
			$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
			element
			.text('OK!').addClass('valid')
			.closest('.control-group').removeClass('error').addClass('success');
		}
	});
});


(function($){
    "use strict";
	
	/* ======================================================================*/
	/* SCROLLING MENU
	/* ======================================================================*/
    $(".trac_mainmenu li a, .trac_mobtrac_menu li a, .link a").click(function(e){
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top},1000);
        e.preventDefault();
    });
	/* ======================================================================*/
	/* PARALLAX HEADER BACKGROUND
	/* ======================================================================*/
	$('.trac_header').parallax("100%", 0.2);
	
	/* ======================================================================*/
	/* COUNTDOWN TIMER
	/* ======================================================================*/
	$(".trac_counter").ccountdown(2014,6,22);
	
	/* ======================================================================*/
	/* WELCOME TEXT SLIDER													
	/* ======================================================================*/
	$('.trac_trac_welcomeslide').textillate({
		selector: '.texts',
		loop: true,
		minDisplayTime: 30000,
		initialDelay: 0,
		autoStart: true,
		inEffects: [ 'bounceInRight'],
		outEffects: [ 'fadeOut' ],
		in: {
			effect: 'fadeInRight',
			delayScale: 0.5,
			delay: 200,
			sync: false,
			shuffle: false,
		},
		out: {
			effect: 'fadeOutLeft',
			delayScale: 0.5,
			delay: 100,
			sync: false,
			shuffle: false,
		}  
	});
	
	//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$("#trac_textload").fadeOut(); // will first fade out the loading animation
		$("#trac_preload").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
	//]]>
	
})(jQuery);



function ScrollTo(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},1000);
}


/* ==========================================================================
	Asynchronous Loading Google Maps
============================================================================= */
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
//  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
//      'callback=initialize';
	script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false'+
		'&key=AIzaSyBo1lL4DNg-aNqSI7bsSUTmK9s2qXTGtP0&callback=initialize';
 
			document.body.appendChild(script);
}
window.onload = loadScript;

/* ==========================================================================
	Google Maps SETTING's
============================================================================= */
/*
 * define the coordinates of your company
 */

lat = 43.170156;
lng = -70.994157; 

var map;
var MY_MAPTYPE_ID = 'custom_style';
 
function initialize() {

	  var featureOpts = [
		 {
				"featureType": "landscape",
				"stylers": [
				  { "weight": 0.1 },
				  { "color": "#fff" }
				]
			  },{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				  { "visibility": "simplified" },
				  { "color": "#ffffff" }
				]
			  },{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				  { "color": "#ecf0f1" }
				]
			  },{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
				  { "color": "#2c3e50" }
				]
			  },{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
					  { "color": "#2c3e50" }
					]
				  },{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
				  { "color": "#ffffff" }
				]
			  },{
				"featureType": "water",
				"stylers": [
				  { "color": "#bdc3c7" }
				]
			  }
			];
	
			/// AIzaSyBo1lL4DNg-aNqSI7bsSUTmK9s2qXTGtP0
  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    mapTypeControl:false,
    streetViewControl:false,
    center: myLatlng,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
  };
  
  var map = new google.maps.Map(document.getElementById('trac_maps'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
  	icon: "img/trac_marker.png",
      map: map
  });
  
  var styledMapOptions = {
		    name: 'Custom Style'
		  };
  
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions); 
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

/*-----------------------------------------------------------------*/

