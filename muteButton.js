var mute_icon = document.getElementById("mute_icon");
var volumeSlider = document.getElementById('custom_range')

function toggleMute() {
	console.log("1");
	if (mute_icon.src == "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg") {
		mute_icon.src = "http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg";
		sound.volume = 0;
		custom_range.value = 0
		console.log("2");
	}

	else {
		mute_icon.src = "http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg";	
		sound.volume = volume;
		custom_range.value = volume*100
		console.log("3");
	}
};