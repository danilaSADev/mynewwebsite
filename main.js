


function windowResized() {
	let width = document.body.clientWidth;

	let nav = document.getElementById("navTag");
	let article = document.getElementById("firstArticle");
	if (width <= 650) {
		nav.hidden = true;
		article.style.width = '100%';
	} else {
		nav.hidden = false;
		article.style.width = '80%';
	}
}

document.addEventListener("DOMContentLoaded", windowResized);