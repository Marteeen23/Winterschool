function openDay(evt, vert_name, vert_link, dayName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName(vert_name);
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].className = tabcontent[i].className.replace(" activeDay", "");
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName(vert_link);
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	var el = document.getElementById(dayName);
	el.className += " activeDay"
	evt.currentTarget.className += " active";
};

function activateCV() {
	document.getElementById("vertical-cv").style.display = "block";
	document.getElementById("vertical-auto").style.display = "none";
	document.getElementById("vertical-ml").style.display = "none";

};

function activateAuto() {
	document.getElementById("vertical-cv").style.display = "none";
	document.getElementById("vertical-auto").style.display = "block";
	document.getElementById("vertical-ml").style.display = "none";
};

function activateML() {
	document.getElementById("vertical-cv").style.display = "none";
	document.getElementById("vertical-auto").style.display = "none";
	document.getElementById("vertical-ml").style.display = "block";
};