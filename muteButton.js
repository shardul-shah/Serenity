var rain_mute_icon = document.getElementById("rain_mute_icon");
var rain_slider = document.getElementById('rain_slider');
var forest_mute_icon = document.getElementById("forest_mute_icon");
var forest_slider = document.getElementById('forest_slider');
var wind_mute_icon = document.getElementById("wind_mute_icon");
var wind_slider = document.getElementById('wind_slider');
var fire_mute_icon = document.getElementById("fire_mute_icon");
var fire_slider = document.getElementById('fire_slider');
var thunder_mute_icon = document.getElementById("thunder_mute_icon");
var thunder_slider = document.getElementById('thunder_slider');

var rain_sound = document.getElementById("rain_sound");
var rain_volume = rain_sound.volume;
var forest_sound = document.getElementById("forest_sound");
var forest_volume = forest_sound.volume;
var wind_sound = document.getElementById("wind_sound");
var wind_volume = wind_sound.volume;
var fire_sound = document.getElementById("fire_sound");
var fire_volume = fire_sound.volume;
var thunder_sound = document.getElementById("thunder_sound");
var thunder_volume = thunder_sound.volume;


function toggleMute(soundType) {
	// if sound is currently playing (and thus mute icon is being displayed), and the mute icon is clicked
	// mute the sound, change the icon cuurrently displayed to speaker, adjust the volume slider accordingly

	/* IMPORTANT: the following is a small bug which made me stuck for a long time. A note for myself and others who read this.
	If the intent is to to use relative filepaths, as one should, and a comparision to a src of a element (such as an image)
	is needed, using element.src yields the ABSOLUTE filepaths, not the relative filepaths. Since often, comparisions are made with
	relative filepaths, this is a common source of bugs. The solution is to use element.getAttribute('src'), which yields the proper
	relative filepath.

	EXAMPLE ON MY MACHINE:

	If an <img> exists with id='mute_icon'...

	DO NOT DO:

	mute_icon.src == 'images/mute_icon.png'
	as mute_icon.src yields:
	file:///Users/Shardul/Desktop/Rain%20Project/images/mute_icon.png (absolute), not 'images/mute_icon.png' (relative).
	
	DO:

	mute_icon.getAttribute('src') == 'images/mute_icon.png'
	as mute_icon.getAttribute('src') yields:
	'images/mute_icon.png' (relative).

	Credit: https://stackoverflow.com/questions/18149043/how-to-check-img-src-is-true-using-javascript */

	if (soundType == "rain") {

		// if rain sound is currently playing and the speaker icon is clicked... 
		if (rain_mute_icon.getAttribute('src') == "images/mute_icon.png") {
			rain_mute_icon.src = "images/speaker_icon.png";
			rain_sound.volume = 0;
			rain_slider.value = 0;
		}

	// if rain sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			rain_mute_icon.src = "images/mute_icon.png";	
			rain_sound.volume = rain_volume;
			rain_slider.value = rain_volume*100;
		}
	}

	else if (soundType == 'forest') {

		// if forest sound is currently playing and the speaker icon is clicked... 
		if (forest_mute_icon.getAttribute('src') == "images/mute_icon.png") {
			forest_mute_icon.src = "images/speaker_icon.png";
			forest_sound.volume = 0;
			forest_slider.value = 0;
		}

	// if forest sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			forest_mute_icon.src = "images/mute_icon.png";	
			forest_sound.volume = forest_volume;
			forest_slider.value = forest_volume*100;
		}
	}

	else if (soundType == 'wind') {

		// if wind sound is currently playing and the speaker icon is clicked... 
		if (wind_mute_icon.getAttribute('src') == "images/mute_icon.png") {
			wind_mute_icon.src = "images/speaker_icon.png";
			wind_sound.volume = 0;
			wind_slider.value = 0;
		}

	// if wind sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			wind_mute_icon.src = "images/mute_icon.png";	
			wind_sound.volume = wind_volume;
			wind_slider.value = wind_volume*100;
		}
	}

	else if (soundType == 'fire') {

		// if fire sound is currently playing and the speaker icon is clicked... 
		if (fire_mute_icon.getAttribute('src') == "images/mute_icon.png") {
			fire_mute_icon.src = "images/speaker_icon.png";
			fire_sound.volume = 0;
			fire_slider.value = 0;
		}

	// if fire sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			fire_mute_icon.src = "images/mute_icon.png";	
			fire_sound.volume = fire_volume;
			fire_slider.value = fire_volume*100;
		}
	}

	else {
		// if thunder sound is currently playing and the speaker icon is clicked... 
		if (thunder_mute_icon.getAttribute('src') == "images/mute_icon.png") {
			thunder_mute_icon.src = "images/speaker_icon.png";
			thunder_sound.volume = 0;
			thunder_slider.value = 0;
		}

	// if thunder sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			thunder_mute_icon.src = "images/mute_icon.png";	
			thunder_sound.volume = thunder_volume;
			thunder_slider.value = thunder_volume*100;
		}
	}
};