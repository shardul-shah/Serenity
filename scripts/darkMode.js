var body = document.body;
var text = document.getElementsByClassName("text");
var to_top = document.getElementById("to_top");
var arrow_up = to_top.children[0]

function toggleDarkMode() {
	if (body.classList.toggle("dark_mode_bg") == true) {
		for (i=0; i<text.length; i++) 
			text[i].style.color = "rgba(255, 255, 255, 1)";
		to_top.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
		arrow_up.style.color = "rgba(0, 0, 0, 0.7)";

	}
	else {
		for (i=0; i<text.length; i++) 
			text[i].style.color = "rgba(0, 0, 0, 1)";
		to_top.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		arrow_up.style.color = "rgba(255, 255, 255, 0.7)"
	}
}
