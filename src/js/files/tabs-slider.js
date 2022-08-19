'use strict';

function Tabs() {
	var bindAll = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].addEventListener('click', change, false);
		}
	}

	var clear = function () {
		var menuElements = document.querySelectorAll('[data-tab]');
		for (var i = 0; i < menuElements.length; i++) {
			menuElements[i].classList.remove('active');
			var id = menuElements[i].getAttribute('data-tab');
			document.getElementById(id).classList.remove('active');
		}
	}

	var change = function (e) {
		clear();
		e.target.classList.add('active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('active');
	}

	bindAll();
}

var connectTabs = new Tabs();

var swiper = new Swiper('.team-slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	freeMode: true,
	loop: true,
		autoplay: {
				delay: 7000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
	mousewheel: {
		invert: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		//dynamicBullets:true,
		
	},
	navigation: {
		prevEl: '.team-slider__nav-prev',
		nextEl: '.team-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
		},
		620: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		910: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1210: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	}
});
