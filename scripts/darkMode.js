var body = document.body;
var text = document.getElementsByClassName("text");
var element_icons = document.getElementsByClassName("slider_icons");
var mute_icons = document.getElementsByClassName("mute_icon");

function toggleDarkMode() {
	to_top.classList.toggle("to_top");
	for (i=0; i<sliders.length; i++) 
		sliders[i].classList.toggle("slider");

	if (body.classList.toggle("dark_mode_bg") == true) {
		for (i=0; i<text.length; i++) 
			text[i].style.color = "rgba(255, 255, 255, 1)";
		for (i=0; i<element_icons.length; i++) 
			element_icons[i].style.color = "rgba(255, 255, 255, 1)";
		for (i=0; i<mute_icons.length; i++)
			mute_icons[i].style.color = "rgba(255, 255, 255, 1)";
	}
	else {
		for (i=0; i<text.length; i++) 
			text[i].style.color = "rgba(0, 0, 0, 1)";
		for (i=0; i<element_icons.length; i++) 
			element_icons[i].style.color = "rgba(0, 0, 0, 1)";
		for (i=0; i<mute_icons.length; i++)
			mute_icons[i].style.color = "rgba(0, 0, 0, 1)";
	}
};
