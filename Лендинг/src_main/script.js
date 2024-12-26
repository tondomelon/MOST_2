const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-nav');
const close = document.querySelector('.close');
const navlinks = Array.from(document.querySelectorAll('.nav-link'));

burger.addEventListener('click', function(event) {
    menu.classList.toggle('active');
});

close.addEventListener('click', function(event) {
    menu.classList.toggle('active');
});

navlinks.forEach((navlink) => {
    navlink.addEventListener('click', function(event) {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
	initCustomSlider();
});

function initCustomSlider() {
	const slider = document.querySelector('.articles-cards');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		e.stopPropagation();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 2;
		slider.scrollLeft = scrollLeft - walk;
	});
}