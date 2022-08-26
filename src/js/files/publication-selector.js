// === PUBLICATIONS SELECTOR === //
let boxs = document.querySelectorAll(".publication-selector__item");
document.querySelector(".publication-selector__menu").addEventListener("click", function (event) {
	if (event.target.tagName != "BUTTON") return false;

	let target = event.target.dataset["view"];

	boxs.forEach(function (el) {
		el.classList.remove("hide");
		if (!el.classList.contains(target) && target != "pub-all") {
			el.classList.add("hide");
		}
	});
});
