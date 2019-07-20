window.onload = updateCopyrightYear();

function updateCopyrightYear()
{	
	copyright_date = document.getElementById("copyright_date"); 
	var today = new Date();
	current_year = today.getFullYear();
	copyright_date.innerHTML = current_year;
}
