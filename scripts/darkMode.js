//Retrieving needed elements in a global space
var body = document.body;
var text = document.getElementsByClassName("text");
var element_icons = document.getElementsByClassName("slider_icons");
var mute_icons = document.getElementsByClassName("mute_icon");

//The engine of the dark mode on my app - a few lines of code toggles dark mode on and off.
function toggleDarkMode() {
	to_top.classList.toggle("to_top"); //to_top (the button that goes to the top of the page) has 2 classes: one for dark mode and one for normal mode. Toggles between the 2.
	for (i=0; i<sliders.length; i++) 
		sliders[i].classList.toggle("slider"); //every single slider (declared in a global space in muteButton.js) has its class toggled, going between dark mode class and non dark mode class.

	//2 things happen: one, the body's background colour changes from animation to/from dark mode, when the dark_mode_bg is toggled.
	//If toggle("dark_mode_bg") returns true, it means dark mode is currently active. 
	if (body.classList.toggle("dark_mode_bg") == true) { //if dark mode is on
		for (i=0; i<text.length; i++) 
			text[i].style.color = "rgba(255, 255, 255, 1)"; //change all the text from black to white since dark mode is on
		for (i=0; i<element_icons.length; i++) 
			element_icons[i].style.color = "rgba(255, 255, 255, 1)"; //change all elemental icons from black to white since dark mode is on
		for (i=0; i<mute_icons.length; i++)
			mute_icons[i].style.color = "rgba(255, 255, 255, 1)"; //change all mute icons from black to white since dark mode is on
	}
	else { //if dark mode is off
		for (i=0; i<text.length; i++) 
			text[i].style.color = "rgba(0, 0, 0, 1)"; //change all the text from white to black since dark mode is off
		for (i=0; i<element_icons.length; i++) 
			element_icons[i].style.color = "rgba(0, 0, 0, 1)"; //change all elemental icons from white to black since dark mode is on
		for (i=0; i<mute_icons.length; i++)
			mute_icons[i].style.color = "rgba(0, 0, 0, 1)"; //change all mute icons from white to black since dark mode is off
	}
};
