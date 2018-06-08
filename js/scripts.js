// Before Document Load
	// Facebook Like Button

(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

// Twitter Share Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// Map Section
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 26.3453, lng: -80.1687},
    	zoom: 9
    });
    var marker = new google.maps.Marker({
    	position: {lat: 26.3453, lng: -80.1687},
    	map: map
    });
}



// On Document Load

$(document).ready(function() {

	// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');

		if (href != undefined && href != '#') {
		  $root.animate({
		    scrollTop: $(href).offset().top
		  }, 500, function () {
		    window.location.hash = href;
		  });
		}
	});

	// There's an error ("a.IndexOf is not a function") loading the Stellar Parallax Library. Requires a work-around.
		// Stellar Parallax Feature
	// $("#contact").stellar();


// Tooltips
$(function() {
	$('[data-toggle*="tooltip"]').tooltip();
});

	// Display ongoing character count when user types in message box
	$(".message-box").on("keyup", function() {
		var charCount = $(".message-box").val().length;
		$("#char-count").html(charCount);
		console.log(charCount);

		if (charCount > 50) {
			$("#char-count").css("color", "red");
		} else {
			$("#char-count").css("color", "white");
		}
	});

	// Messsage-Submit Event Listener
	$("#message-submit").on("click", function() {
		var comment = $('.message-box').val();
		if (comment === "") {
			$(".message-box").css("border", "2px solid red");
		} else {
			$(".message-box").css("border", "1px solid white");
			$("#visible-comment").html(comment);
			$(".message-box").hide();			
		}
		return false;
	});


	// Work Section
	 for(var i = 0; i < works.length; i++) {
      $("#work").append(
        "<div class='col-xs-6 col-sm-3' id='work" + i + "'>\
            <a href='#" + works[i].url + "' class='work-img'>\
                <img class='img-responsive' src='" + works[i].pic + "'>\
                <span class='info'>\
                    <p class='proj-title'>Title:</p> '" + works[i].title + "'\
                </span>\
            </a>\
        </div>"
    	);

      $("ul.dropdown-menu").append("<li><a href='#work"+i+"'>work "+i+"</a></li>");

        var images = $("#work img");
        if (i%2 === 0) {
            $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
            $(images[i]).css("border", "2px solid salmon");
        };
    };

	$(".work-img").mouseenter( function() {
		$(".info", this).show();
	}).mouseleave(function () {
		$(".info", this).hide();
	});
});