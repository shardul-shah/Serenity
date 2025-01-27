function adjustVolume(newSliderValue, soundType) {
	//newSliderValue is the value the user moves the slider to. 
	
	if (soundType == "rain") {
		//the same comments apply to each of the soundTypes below
		//must divide by 100 as volume scales are from 0 to 1.0, and my slider is from 0 to 100.
		rain_sound.volume = newSliderValue/100;
		//console.log(rain_sound.volume);

		// we must keep a copy of the old sound volume value, for the case of the user changing the slider value but then muting sound	
		rain_volume = rain_sound.volume;

		//see the reason for directly modifying className instead of using toggle/add/remove JS functions at the end of this file.

				//the only time a mute_icon will be displayed in code is when the volume = 0. So:
		if (rain_mute_icon.className == "fas fa-volume-mute mute_icon")  //if sound is muted (volume = 0) 
			rain_mute_icon.className = "fas fa-volume-up mute_icon";

		if (rain_sound.volume == 0) 
			rain_mute_icon.className = "fas fa-volume-mute mute_icon";
	}

	else if (soundType == "ocean") {
		ocean_sound.volume = newSliderValue/100;
		ocean_volume = ocean_sound.volume;

		if (ocean_mute_icon.className == "fas fa-volume-mute mute_icon")  //if sound is muted (volume = 0) 
			ocean_mute_icon.className = "fas fa-volume-up mute_icon";

		if (ocean_sound.volume == 0) 
			ocean_mute_icon.className = "fas fa-volume-mute mute_icon";
	}

	else if (soundType == "forest") {
		forest_sound.volume = newSliderValue/100;
		forest_volume = forest_sound.volume;

		if (forest_mute_icon.className == "fas fa-volume-mute mute_icon")  //if sound is muted (volume = 0) 
			forest_mute_icon.className = "fas fa-volume-up mute_icon";

		if (forest_sound.volume == 0) 
			forest_mute_icon.className = "fas fa-volume-mute mute_icon";
	}

	else if (soundType == "wind") {
		wind_sound.volume = newSliderValue/100;
		wind_volume = wind_sound.volume;

		if (wind_mute_icon.className == "fas fa-volume-mute mute_icon")  //if sound is muted (volume = 0) 
			wind_mute_icon.className = "fas fa-volume-up mute_icon";

		if (wind_sound.volume == 0) 
			wind_mute_icon.className = "fas fa-volume-mute mute_icon";
	}
	
	else if (soundType == "fire") {
		fire_sound.volume = newSliderValue/100;
		fire_volume = fire_sound.volume;

		if (fire_mute_icon.className == "fas fa-volume-mute mute_icon")  //if sound is muted (volume = 0) 
			fire_mute_icon.className = "fas fa-volume-up mute_icon";

		if (fire_sound.volume == 0) 
			fire_mute_icon.className = "fas fa-volume-mute mute_icon";
	}

	else {
		thunder_sound.volume = newSliderValue/100;
		thunder_volume = thunder_sound.volume;

		if (thunder_mute_icon.className == "fas fa-volume-mute mute_icon")  //if sound is muted (volume = 0) 
			thunder_mute_icon.className = "fas fa-volume-up mute_icon";

		if (thunder_sound.volume == 0) 
			thunder_mute_icon.className = "fas fa-volume-mute mute_icon";
	}
		// leave below line for testing purposes 
		// console.log(sound.volume, newSliderValue)
};

/* write lesson learned about toggle/add/remove and setting classname directly
The reason I set the className directly (e.g thunder_mute_icon.className = "fas fa-volume-mute mute_icon";)
is because the JavaScript functions classList.toggle("class_name"), classList.add("class_name") and 
classList.remove("class_name") don't maintain the order of the classes unless explicitly coded. In classes with more than 2 classes,
the order especially matters.

Because the way I want to check for whether sound is muted or not and what icon is being displayed is by checking
the current className, e.g.: if (thunder_mute_icon.className == "fas fa-volume-mute mute_icon"), the order of the classes
in the className is actually very important. And since add/remove/toggle disrupts the order, to avoid a large amount
of unneccesary work, I just directly modified the className - it is much easier and simpler.

*/