//need the below function vh() to be able to use vh (convert px values to vh) in javascript (cannot use vh, vw, vmin, vmax in JS directly)
function vh(value) {
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (value * height) / 100;
}
 
window.addEventListener("scroll", displayScrollBtn);

function displayScrollBtn() {
	if (document.body.scrollTop > vh(7) || document.documentElement.scrollTop > vh(7)) {
		to_top.style.transition = "opacity 2s";
		to_top.style.opacity = "1";

	}

	else {
		to_top.style.opacity = "0";
		to_top.style.transition = "opacity 2s";
		//timeout = setTimeout(sample, 2500); 
		/* very buggy - how do I delay this properly? 
		FIXME KEYFRAMES is the solution. I will implement this later when I have time. Check todolist.txt for more information.*/
		
	}
};

function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
 	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

/*
Buggy; see setTimeOut function call above. Leave for now.
function sample() {
	to_top.style.display = "none";
}
*/ 