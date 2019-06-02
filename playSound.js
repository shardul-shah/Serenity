//TODO: how do I make it so when I spam click on the play/pause button, since my mouse is technically still on the ...
// ... button, it shows the hover styled button for each play and pause? Right now it doesn't do that until ...
// ... I take my mouse away from the button and then click back on it.

var sound = document.getElementById("ambient_sound");
var toggle_btn = document.getElementById("play_pause_button");


function togglePlay() {
	//important: this function is only called when the pause/play button is actually clicked
	// so whether or not the sound is paused or playing depends on audio's state AFTER the latest click in the DOM

	// sound is about to be paused->played, so display pause button
	if (sound.paused) 
		displayPauseButton()

	// sound is about to be played ->paused, so display play button
	else 
		displayPlayButton()

	return sound.paused ? sound.play() : sound.pause();
};

function mouseOverEffect() {

	// sound is currently paused, so display the hover style for play button
	if (sound.paused) {
		toggle_btn.style.borderColor = "transparent transparent transparent purple";
	}

	// sound is currently playing, so display the hover style for pause button
	else 
	{	
		toggle_btn.style.borderColor = "green";
	}
}; 

function mouseOutEffect() {

	//sound is currently paused, and mouse is not hovered over button, so display default play button style
	if (sound.paused)
		toggle_btn.style.borderColor = "transparent transparent transparent black";

	//sound is currently playing, and mouse is not hovered over button, so display default pause button style
	else
		toggle_btn.style.borderColor = "black";
};

// display default pause button
function displayPauseButton() {
	toggle_btn.style.borderStyle = "double";
	toggle_btn.style.borderWidth = "0px 0px 0px 37px";
	toggle_btn.style.borderColor = "black";
};

// display default play button
function displayPlayButton() {
	toggle_btn.style.borderStyle = "solid";
	toggle_btn.style.borderWidth = "37px 0px 37px 74px";
	toggle_btn.style.borderColor = "transparent transparent transparent black";
};
