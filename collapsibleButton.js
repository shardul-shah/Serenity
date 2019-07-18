var collapsible_btn = document.getElementById("collapsible");
var collapsed_div = document.getElementById("collapsed_div"); 

function toggleCollapsible() {
	if (window.getComputedStyle(collapsed_div).display == "none") {

		/* note: getComputedStyle is needed because in JS, .style only gives the default style of an element.
		This means that any COMPUTED style, i.e. a style set using a CSS file, is not reflected in element.style.
		In order to get the computed style of an element, window.getComputedStyle(element).display must be used.

		However, when setting the CSS of elements in JS, the actual computedStyle values don't matter as
		they are just being overwritten.

		Source: https://stackoverflow.com/questions/16748813/mydiv-style-display-returns-blank-when-set-in-master-stylesheet

		*/ 
		collapsed_div.style.display = "flex";
		displayGlowEffect();
	}
	
	else {
		collapsed_div.style.display = "none";
		displayFadeEffect(); 
	} 

};

function displayFadeEffect() {
	collapsible_btn.style.opacity = 0.5;
	collapsible_btn.style.backgroundColor = "#F45C82";
};

function displayGlowEffect() {
	collapsible_btn.style.opacity = 1;
	collapsible_btn.style.backgroundColor = "#FF0041";
};