var mute_icon = document.getElementById("mute_icon");
var volumeSlider = document.getElementById('custom_range')

function toggleMute() {
	// if sound is currently playing (and thus mute icon is being displayed), and the mute icon is clicked
	// mute the sound, change the icon cuurrently displayed to speaker, adjust the volume slider accordingly
	if (mute_icon.src == "mute_icon.svg") {
		mute_icon.src = "speaker_icon.svg";
		sound.volume = 0;
		custom_range.value = 0
	}

	// if sound is currently muted (and thus speaker icon is being displayed), and the speaker icon is clicked...
	// unmute the sound to the volume it was before (stored in var volume), and adjust the slider back to where it was before
	// and change the icon currently displayed to mute 
	else {
		mute_icon.src = "mute_icon.svg";	
		sound.volume = volume;
		custom_range.value = volume*100
	}
};