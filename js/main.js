/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavResponsive() {
    var responsive = document.getElementById("topNav");
    if (responsive.className === "topnav") {
        responsive.className += " responsive";
    } else {
        responsive.className = "topnav";
    }
}

/* Hide logo section of banner on scroll */
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$(".banner, .banner-header, .homepage-title, .title, .share-buttons, img.logo").addClass("active");
	} else {
		//remove the background property so it becomes visible again, defined in main.css
		$(".banner, .banner-header, .homepage-title, .title, .share-buttons, img.logo").removeClass("active");
	}
});

/* Make nav transparent on scroll */
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$(".topnav").addClass("active");
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$(".topnav").removeClass("active");
	}
});

//Emails
// split your email into two parts and remove the @ symbol
        var first = "info";
        var last = "sicilyintransition.org";

        var firstPi = "martin.carver";
        var lastPi = "york.ac.uk";

		var firstRome1 = "alemoli";
		var lastRome1 = "fastwebnet.it";

		var firstRome2 = "paolaor.archeo";
		var lastRome2 = "gmail.com";

		var firstBioarch1 = " oliver.craig";
		var lastBioarch1 = "york.ac.uk";

		var firstBioarch2 = " michelle.alexander";
		var lastBioarch2 = "york.ac.uk";
		
		var firstBioarch3 = " nathan.wales";
		var lastBioarch3 = "york.ac.uk";

		var firstLecce = " girolamo.fiorentino";
		var lastLecce = "unisalento.it";

		var firstWebsite = "neil.gevaux";
		var lastWebsite = "york.ac.uk";
		
//Lightbox options
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
	  'fitImagesInViewport' : true
    })
	
