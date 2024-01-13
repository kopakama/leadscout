export function scrollTo(e, elementId) {
	e.preventDefault(); // Stop Page Reloading
	const elem = document.getElementById(elementId);
	elem.scrollIntoView();
}
