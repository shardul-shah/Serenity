//Mute Icons

var rain_mute_icon = document.getElementById("rain_mute_icon");
var forest_mute_icon = document.getElementById("forest_mute_icon");
var wind_mute_icon = document.getElementById("wind_mute_icon");
var fire_mute_icon = document.getElementById("fire_mute_icon");
var thunder_mute_icon = document.getElementById("thunder_mute_icon");
var master_mute_icon = document.getElementById("master_mute_icon");
var ocean_mute_icon = document.getElementById("ocean_mute_icon");

//Sliders
var rain_slider = document.getElementById("rain_slider");
var forest_slider = document.getElementById("forest_slider");
var wind_slider = document.getElementById("wind_slider");
var fire_slider = document.getElementById("fire_slider");
var thunder_slider = document.getElementById("thunder_slider");
var ocean_slider = document.getElementById("ocean_slider");

//Sounds and sound array in HTML script

//Volumes for each Sound
var rain_volume = rain_sound.volume;
var forest_volume = forest_sound.volume;
var wind_volume = wind_sound.volume;
var fire_volume = fire_sound.volume;
var thunder_volume = thunder_sound.volume;
var ocean_volume = ocean_sound.volume;

var volumes = [rain_volume, forest_volume, wind_volume, fire_volume, thunder_volume, ocean_volume];
var mute_icons = [rain_mute_icon, forest_mute_icon, wind_mute_icon, fire_mute_icon, thunder_mute_icon, master_mute_icon, ocean_mute_icon];
var sliders = [rain_slider, forest_slider, wind_slider, fire_slider, thunder_slider, ocean_slider];

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
		if (rain_mute_icon.getAttribute('src') == "images/speaker_icon.png") {
			rain_mute_icon.src = "images/mute_icon.png";
			rain_sound.volume = 0;
			rain_slider.value = 0;
		}

		//case of slider manually being put to 0 and then sound being unmuted
		else if (rain_mute_icon.getAttribute('src') == "images/mute_icon.png" && rain_volume == 0) {
			rain_mute_icon.src = "images/speaker_icon.png";
			rain_sound.volume = 0.01;
			rain_slider.value = 1;
			rain_volume = rain_sound.volume;
		}

	// if rain sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var rain_volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			rain_mute_icon.src = "images/speaker_icon.png";	
			rain_sound.volume = rain_volume;
			rain_slider.value = rain_volume*100;
		}
	}

	else if (soundType == "ocean") {
		// if ocean sound is currently playing and the speaker icon is clicked... 
		if (ocean_mute_icon.getAttribute('src') == "images/speaker_icon.png") {
			ocean_mute_icon.src = "images/mute_icon.png";
			ocean_sound.volume = 0;
			ocean_slider.value = 0;
		}

		//case of slider manually being put to 0 and then sound being unmuted
		else if (ocean_mute_icon.getAttribute('src') == "images/mute_icon.png" && ocean_volume == 0) {
			ocean_mute_icon.src = "images/speaker_icon.png";
			ocean_sound.volume = 0.01;
			ocean_slider.value = 1;
			ocean_volume = ocean_sound.volume;
		}

		else {
			ocean_mute_icon.src = "images/speaker_icon.png";	
			ocean_sound.volume = ocean_volume;
			ocean_slider.value = ocean_volume*100;
		}
	}

	else if (soundType == 'forest') {

		// if forest sound is currently playing and the speaker icon is clicked... 
		if (forest_mute_icon.getAttribute('src') == "images/speaker_icon.png") {
			forest_mute_icon.src = "images/mute_icon.png";
			forest_sound.volume = 0;
			forest_slider.value = 0;
		}

		//case of slider manually being put to 0 and then sound being unmuted
		else if (forest_mute_icon.getAttribute('src') == "images/mute_icon.png" && forest_volume == 0) {
			forest_mute_icon.src = "images/speaker_icon.png";
			forest_sound.volume = 0.01;
			forest_slider.value = 1;
			forest_volume = forest_sound.volume;
		}

	// if forest sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			forest_mute_icon.src = "images/speaker_icon.png";	
			forest_sound.volume = forest_volume;
			forest_slider.value = forest_volume*100;
		}
	}

	else if (soundType == 'wind') {

		// if wind sound is currently playing and the speaker icon is clicked... 
		if (wind_mute_icon.getAttribute('src') == "images/speaker_icon.png") {
			wind_mute_icon.src = "images/mute_icon.png";
			wind_sound.volume = 0;
			wind_slider.value = 0;
		}

		//case of slider manually being put to 0 and then sound being unmuted
		else if (wind_mute_icon.getAttribute('src') == "images/mute_icon.png" && wind_volume == 0) {
			wind_mute_icon.src = "images/speaker_icon.png";
			wind_sound.volume = 0.01;
			wind_slider.value = 1;
			wind_volume = wind_sound.volume;
		}

	// if wind sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			wind_mute_icon.src = "images/speaker_icon.png";	
			wind_sound.volume = wind_volume;
			wind_slider.value = wind_volume*100;
		}
	}

	else if (soundType == 'fire') {

		// if fire sound is currently playing and the speaker icon is clicked... 
		if (fire_mute_icon.getAttribute('src') == "images/speaker_icon.png") {
			fire_mute_icon.src = "images/mute_icon.png";
			fire_sound.volume = 0;
			fire_slider.value = 0;
		}

		//case of slider manually being put to 0 and then sound being unmuted
		else if (fire_mute_icon.getAttribute('src') == "images/mute_icon.png" && fire_volume == 0) {
			fire_mute_icon.src = "images/speaker_icon.png";
			fire_sound.volume = 0.01;
			fire_slider.value = 1;
			fire_volume = fire_sound.volume;
		}
	// if fire sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			fire_mute_icon.src = "images/speaker_icon.png";	
			fire_sound.volume = fire_volume;
			fire_slider.value = fire_volume*100;
		}
	}

	else {
		// if thunder sound is currently playing and the speaker icon is clicked... 
		if (thunder_mute_icon.getAttribute('src') == "images/speaker_icon.png") {
			thunder_mute_icon.src = "images/mute_icon.png";
			thunder_sound.volume = 0;
			thunder_slider.value = 0;
		}

		//case of slider manually being put to 0 and then sound being unmuted
		else if (thunder_mute_icon.getAttribute('src') == "images/mute_icon.png" && thunder_volume == 0) {
			thunder_mute_icon.src = "images/speaker_icon.png";
			thunder_sound.volume = 0.01;
			thunder_slider.value = 1;
			thunder_volume = thunder_sound.volume;
		}

	// if thunder sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
		else {
			thunder_mute_icon.src = "images/speaker_icon.png";	
			thunder_sound.volume = thunder_volume;
			thunder_slider.value = thunder_volume*100;
		}
	}
};