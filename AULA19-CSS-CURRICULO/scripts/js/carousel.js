document.querySelector(".carousel-container").addEventListener("wheel", function (e) {
	e.preventDefault();

	const track = this.querySelector(".carousel-track");

	const scrollAmount = 100;

	const direction = e.deltaY > 0 ? 1 : -1;

	let currentScroll = track.style.transform ? parseInt(track.style.transform.replace("translateX(", "")) : 0;

	let newScroll = currentScroll - direction * scrollAmount;

	let maxSize = document.querySelectorAll(".curso-card").length * 300 + 300;

	const maxScroll = track.offsetWidth - maxSize;

	if (newScroll > 0) newScroll = 0;
	if (newScroll < maxScroll) newScroll = maxScroll;

	track.style.transform = `translateX(${newScroll}px)`;
});
