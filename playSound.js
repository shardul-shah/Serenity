var sound = document.getElementById("ambient_sound");
var toggle_btn = document.getElementById("play_pause_button")

function togglePlay() {

	if (sound.paused) {
		toggle_btn.style.borderStyle = "double";
		toggle_btn.style.borderWidth = "0px 0px 0px 37px";
		toggle_btn.style.borderColor = "#202020";
	}
	else {
		toggle_btn.style.borderStyle = "solid";
		toggle_btn.style.borderWidth = "37px 0px 37px 74px";
		toggle_btn.style.borderColor = "transparent transparent transparent black";
	}

	return sound.paused ? sound.play() : sound.pause();
};

