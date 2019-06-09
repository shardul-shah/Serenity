function adjustVolume(newSliderValue, soundType) {
	//newSliderValue is a value the user moves the slider to. 

	//must divide by 100 as volume scales are from 0 to 1.0, and my slider is from 0 to 100.
	sound.volume = newSliderValue/100;
	// we must keep a copy of the old sound volume value, for the case of the user changing the slider value but then muting sound	
	volume = sound.volume;

	if (soundType == "rain") {
		if (rain_mute_icon.getAttribute('src') == "images/speaker_icon.png")
			rain_mute_icon.src = "images/mute_icon.png";	

	}

	else if (soundType == "forest") {
		if (forest_mute_icon.getAttribute('src') == "images/speaker_icon.png")
			forest_icon.src = "images/mute_icon.png";	
	}

	else if (soundType == "wind") {
		if (wind_mute_icon.getAttribute('src') == "images/speaker_icon.png")
			wind_mute_icon.src = "images/mute_icon.png";	
	}
	
	else if (soundType == "fire") {
		if (fire_mute_icon.getAttribute('src') == "images/speaker_icon.png")
			fire_mute_icon.src = "images/mute_icon.png";	
	}

	else 
		if (thunder_mute_icon.getAttribute('src') == "images/speaker_icon.png")
			thunder_mute_icon.src = "images/mute_icon.png";	
	
		// leave below line for testing purposes 
		// console.log(sound.volume, newSliderValue)
};