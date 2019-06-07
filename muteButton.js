var mute_icon = document.getElementById("mute_icon");
var volumeSlider = document.getElementById('custom_range');

function toggleMute() {
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

	if (mute_icon.getAttribute('src') == "images/mute_icon.png") {
		mute_icon.src = "images/speaker_icon.png";
		sound.volume = 0;
		custom_range.value = 0;
	}

	// if sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
	else {
		mute_icon.src = "images/mute_icon.png";	
		sound.volume = volume;
		custom_range.value = volume*100
	}
};