//need the below function vh() to be able to use vh in javascript (cannot use vh, vw, vmin, vmax in JS directly)

function vh(value) {
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (value * height) / 100;
}
 
window.addEventListener("scroll", displayScrollBtn);

function displayScrollBtn() {
	if (document.body.scrollTop > vh(20) || document.documentElement.scrollTop > vh(20)) {
		to_top.style.display = "flex";
		to_top.style.transition = "opacity 2s";
		console.log("X"+document.documentElement.scrollTop);
		to_top.style.opacity = "1";

	}

	else {
		to_top.style.transition = "opacity 2s";
		console.log("Y"+document.body.scrollTop);
		to_top.style.opacity = "0";
		//setTimeout(sample, 4000); // very buggy - how do I delay this properly?

	}
};

function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
 	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


function sample() {
	to_top.style.display = "none";
}
