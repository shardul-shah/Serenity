function adjustVolume(newSliderValue, soundType) {
	//newSliderValue is the value the user moves the slider to. 
	
	if (soundType == "rain") {
		//must divide by 100 as volume scales are from 0 to 1.0, and my slider is from 0 to 100.
		rain_sound.volume = newSliderValue/100;
		console.log(rain_sound.volume);

		// we must keep a copy of the old sound volume value, for the case of the user changing the slider value but then muting sound	
		rain_volume = rain_sound.volume;

		//the same comment applies to each of the soundTypes below

		//the only time a speaker_icon will be displayed in code is when the volume = 0. So:
		if (rain_mute_icon.getAttribute('src') == "images/speaker_icon.png") //if sound is muted (volume = 0)
			rain_mute_icon.src = "images/mute_icon.png";	

		if (rain_sound.volume == 0)
			rain_mute_icon.src = "images/speaker_icon.png";

		//FIXME IMPLEMENT SLIDER AND MUTEBUTTON RAIN CHANGE INTO OTHER SOUND TYPES, THEN COMMENT IT OUT

	}

	else if (soundType == "forest") {
		forest_sound.volume = newSliderValue/100;
		forest_volume = forest_sound.volume;

		if (forest_mute_icon.getAttribute('src') == "images/speaker_icon.png") //if sound is muted (volume = 0)
			forest_mute_icon.src = "images/mute_icon.png";	
	}

	else if (soundType == "wind") {
		wind_sound.volume = newSliderValue/100;
		wind_volume = wind_sound.volume;
		if (wind_mute_icon.getAttribute('src') == "images/speaker_icon.png") //if sound is muted (volume = 0)
			wind_mute_icon.src = "images/mute_icon.png";	
	}
	
	else if (soundType == "fire") {
		fire_sound.volume = newSliderValue/100;
		fire_volume = fire_sound.volume;
		if (fire_mute_icon.getAttribute('src') == "images/speaker_icon.png") //if sound is muted (volume = 0)
			fire_mute_icon.src = "images/mute_icon.png";	
	}

	else {
		thunder_sound.volume = newSliderValue/100;
		thunder_volume = thunder_sound.volume;
		if (thunder_mute_icon.getAttribute('src') == "images/speaker_icon.png") //if sound is muted (volume = 0)
			thunder_mute_icon.src = "images/mute_icon.png";	
	}
		// leave below line for testing purposes 
		// console.log(sound.volume, newSliderValue)
};