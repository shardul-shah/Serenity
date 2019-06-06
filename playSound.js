//TODO #1: how do I make it so when I spam click on the play/pause button, since my mouse is technically still on the ...
// ... button, it shows the hover styled button for each play and pause? Right now it doesn't do that until ...
// ... I take my mouse away from the button and then click back on it.

var sound = document.getElementById("ambient_sound");
var toggle_btn = document.getElementById("play_pause_button");
var volume = sound.volume;

function adjustVolume(newSliderValue) {
	//newSliderValue is a value the user moves the slider to. 

	//must divide by 100 as volume scales are from 0 to 1.0, and my slider is from 0 to 100.
	sound.volume = newSliderValue/100;
	// we must keep a copy of the old sound volume value, for the case of the user changing the slider value but then muting sound	
	volume = sound.volume;

	if (mute_icon.src == "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg")
		mute_icon.src = "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg";	

		// leave below line for testing purposes 
		// console.log(sound.volume, newSliderValue)
};

function togglePlay() {
	//important: this function is only called when the pause/play button is actually clicked
	// so whether or not the sound is paused or playing depends on audio's state AFTER the latest click in the DOM

	// sound is about to be paused->played, so display pause button
	if (sound.paused) 
		displayPauseButton();

	// sound is about to be played ->paused, so display play button
	else 
		displayPlayButton();

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

// display default pause button through change in CSS
function displayPauseButton() {
	toggle_btn.style.borderStyle = "double";
	toggle_btn.style.borderWidth = "0px 0px 0px 37px";
	toggle_btn.style.borderColor = "black";
	toggle_btn.style.backgroundColor = "transparent";
};

// display default play button through change in CSS
function displayPlayButton() {
	toggle_btn.style.borderStyle = "solid";
	toggle_btn.style.borderWidth = "37px 0px 37px 74px";
	toggle_btn.style.borderColor = "transparent transparent transparent black";
	toggle_btn.style.backgroundColor = "transparent";
};