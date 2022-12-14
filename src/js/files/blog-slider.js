// === BLOG SLIDER === //
var swiper = new Swiper('.blog-slider', {
	//spaceBetween: 20,
	effect: 'fade',
	loop: true,
	mousewheel: {
		invert: false,
	},
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// autoHeight: true,
	pagination: {
		el: '.blog-slider__pagination',
		clickable: true,
	}
});



// === CALENDAR SLIDER === //

var swiper = new Swiper('.calendar-slider', {
	slidesPerView:'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	autoplay: {
		delay: 9000,
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

		},
		650: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1220: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1600: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	}
});


// === HEAD SLIDER === //

var swiper = new Swiper('.head-slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	slideToClickedSlide: true,
	autoHeight: true,
	centeredSlides: true,
	autoplay: {
		delay: 12000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	effect: 'coverflow',
	coverflowEffect: {
	rotate: 15,
	stretch: 150,
	slideShadows: true,
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
		prevEl: '.head-slider__nav-prev',
		nextEl: '.head-slider__nav-next',
	}
	// breakpoints: {
	
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 20,
	// 	},
	// 	1160: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 20,
	// 	},
	// }
});

// === PUBLICATION MENU === //

var swiper = new Swiper('.pub-menu-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 6,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false,
	// },
	mousewheel: {
		invert: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	dynamicBullets:true,
		
	// },
	navigation: {
		prevEl: '.pub-menu-slider__nav-prev',
		nextEl: '.pub-menu-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
			470: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
			690: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		910: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1140: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1360: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	}
});

// === BANNER SLIDER === //

var swiper = new Swiper('.banner-slider', {
	slidesPerView: 'auto',
	//slidesPerView: 3,
	spaceBetween: 20,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	slideToClickedSlide: true,
	autoHeight: true,
	centeredSlides: true,
	
	
	// effect: 'coverflow',
	// coverflowEffect: {
	// rotate: 15,
	// stretch: 150,
	// slideShadows: true,
	// },

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
		prevEl: '.banner-slider__nav-prev',
		nextEl: '.banner-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	}
});

// === BANNER SLIDER-VERT === //

var swiper = new Swiper('.banner-slider-vert', {
	slidesPerView: 'auto',
	//slidesPerView: 3,
	spaceBetween: 20,
	direction: 'vertical',
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	//freeMode: true,
	loop: true,
	slideToClickedSlide: true,
	//autoHeight: true,
	//centeredSlides: true,
	
	autoplay: {
		delay: 12000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	// effect: 'coverflow',
	// coverflowEffect: {
	// rotate: 15,
	// stretch: 150,
	// slideShadows: true,
	// },

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
		prevEl: '.banner-slider__nav-prev',
		nextEl: '.banner-slider__nav-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
			direction: 'horizontal',
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	}
});