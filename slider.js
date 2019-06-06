function adjustVolume(newSliderValue) {
	//newSliderValue is a value the user moves the slider to. 

	//must divide by 100 as volume scales are from 0 to 1.0, and my slider is from 0 to 100.
	sound.volume = newSliderValue/100;
	// we must keep a copy of the old sound volume value, for the case of the user changing the slider value but then muting sound	
	volume = sound.volume;

	if (mute_icon.src == "speaker_icon.svg")
		mute_icon.src = "mute_icon.svg";	

		// leave below line for testing purposes 
		// console.log(sound.volume, newSliderValue)
};