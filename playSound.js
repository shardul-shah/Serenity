var sound = document.getElementById("ambient_sound");


function togglePlay() {
	return sound.paused ? sound.play() : sound.pause();
};
